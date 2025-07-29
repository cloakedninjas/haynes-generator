import * as React from 'react'
import { useRef, useState } from 'react'
import './App.css'
import haynesLogo from './assets/images/haynes-logo-bw.png';
import { saveImage } from './lib/save-image.ts';
import { presets, swatches } from './lib/presets.ts';

/*
todo:
- get TS types for FormEvent<MyDataType>
- find Vite asset config for asset dir
 */

function App() {
    const [formData, setFormData] = useState<CoverFields>(presets[0]);
    const previewNodeRef = useRef(null);

    function changePreset(presetIndex: string) {
        const preset = presets[parseInt(presetIndex)];
        if (preset) {
            setFormData(preset);
        }
    }

    function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}));
    }

    function changeBackgroundColor(color: string) {
        setFormData((prevState) => ({...prevState, background: color}));
    }

    function generateImage() {
        const filename = (formData.make + '-' + formData.model + '.png').toLowerCase().replace(/\s+/g, '-');
        saveImage(previewNodeRef.current, filename);
    }

    const cssVarBg = {'--background-color': formData.background} as React.CSSProperties;
    const swatchVars: React.CSSProperties[] = swatches.map(swatch => {
        return {'--swatch-color': swatch} as React.CSSProperties;
    });

    function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const input = e.target as FileEventTarget;

        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = () => {
                if (!input.files) {
                    return;
                }

                setFormData(prevState => ({
                    ...prevState,
                    image: URL.createObjectURL(input.files[0])
                }));
            }

            reader.readAsDataURL(input.files[0]);
        }

        //const fr = new FileReader();
        //fr.readAsDataURL(e.target.value)
        //const i = new Image();
    }

    return (
        <main style={cssVarBg}>
            <section className="preview" ref={previewNodeRef}>
                <div className="top-section">
                    <header className="box-section">
                        <h1>
                            <div className="make">{formData.make}</div>
                            <div className="model">{formData.model}</div>
                        </h1>
                        <h2 className="variant-info">{formData.variant}</h2>
                    </header>
                    <div className="logo box-section">
                        <img src={haynesLogo} alt="Haynes Logo"/>
                    </div>
                </div>

                <h2 className="book-type box-section">{formData.bookType}</h2>
                <div className="diagram box-section" style={{backgroundImage: `url(${formData.image})`}}></div>
            </section>
            <form className="controls">
                <p>
                    <label htmlFor="image">Preset</label>
                    <select onChange={e => changePreset(e.target.value)}>
                        {presets.map((preset, index) => (
                            <option key={index} value={index}>
                                {preset.make} {preset.model}
                            </option>
                        ))}
                    </select>
                </p>

                <p>
                    <label htmlFor="make">Make</label>
                    <input
                        type="text"
                        id="make"
                        name="make"
                        value={formData.make}
                        onChange={handleInput} />
                </p>

                <p>
                    <label htmlFor="make">Model</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleInput} />
                </p>

                <p>
                    <label htmlFor="variant">Variant</label>
                    <textarea
                        id="variant"
                        name="variant"
                        value={formData.variant}
                        onChange={handleInput} />
                </p>

                <p>
                    <label htmlFor="make">Book type</label>
                    <input
                        type="text"
                        id="bookType"
                        name="bookType"
                        value={formData.bookType}
                        onChange={handleInput} />
                </p>

                <p>
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        onChange={handleInput} />
                </p>

                <p>
                    <label htmlFor="image_upload">Image upload</label>
                    <input
                        type="file"
                        id="image_upload"
                        name="image_upload"
                        accept={'image/*'}
                        onChange={e => handleImageUpload(e)}
                    />
                </p>

                <label>Colour scheme</label>

                <ul className="color-picker">
                    {swatchVars.map((swatch, index) => (
                        <li key={index} className="color-swatch" style={swatch}>
                            <a onClick={() => changeBackgroundColor(swatches[index])}></a>
                        </li>
                    ))}
                </ul>

                <button onClick={() => generateImage()} type="button">Download image</button>
            </form>
        </main>

    )
}

export default App

export interface CoverFields {
    make: string;
    model: string;
    variant: string;
    bookType: string;
    image: string;
    background: string;
}

// @see https://github.com/microsoft/TypeScript/issues/31816
export type FileEventTarget = EventTarget & { files: FileList };
