export function saveImage(sourceNode: HTMLElement | null, filename: string) {
    if (!sourceNode) {
        return;
    }

    htmlToImage
        .toPng(sourceNode)
        .then(dataUrl => {
            const link = document.createElement('a');
            link.download = filename;
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(err => {
            console.error('oops, something went wrong!', err);
        });
}

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace htmlToImage {
    function toPng<T extends HTMLElement>(node: T): Promise<string>;
}
