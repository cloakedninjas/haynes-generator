import * as React from 'react'
import { type ChangeEvent, useRef, useState } from 'react'
import './App.css'
import haynesLogo from './assets/images/haynes-logo-bw.png';
import { saveImage } from './lib/save-image.ts';

function App() {
    const [formData, setFormData] = useState<CoverFields>({
        make: 'Ford',
        model: 'Capri',
        variant: `All V6 models (including Series III)
1974 to 1998 ▢ 2792 cc ▢ 2994 cc`,
        bookType: 'Owners Workshop Manual',
        image: 'src/assets/images/f22.png',
        background: '#8f083c'
    });
    const previewNodeRef = useRef(null);

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
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

    const simpleFields = [
        'make',
        'model',
        'variant',
        'bookType'
    ]

    const cssVarBg = {'--background-color': formData.background} as React.CSSProperties;

    const swatches: string[] = [
        '#8f083c',
        '#cc0449',
        '#cc6b19',
        '#047a30',
        '#6cbb92',
        '#9112c5',
        '#10394c',
        '#4457b5',
        '#61685e',
        '#241f21',
    ];

    const swatchVars: React.CSSProperties[] = swatches.map(swatch => {
        return {'--swatch-color': swatch} as React.CSSProperties;
    });

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
                {
                    simpleFields.map((key) => (
                        <p key={key}>
                            <label htmlFor={key}>{key}</label>
                            <input
                                type="text"
                                id={key}
                                name={key}
                                value={formData[key as keyof typeof formData]}
                                onInput={handleInput}
                            />
                        </p>
                    ))
                }

                <p>
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onInput={handleInput}
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

interface CoverFields {
    make: string;
    model: string;
    variant: string;
    bookType: string;
    image: string;
    background: string;
}
