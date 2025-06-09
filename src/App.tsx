import { type ChangeEvent, useState } from 'react'
import './App.css'
import haynesLogo from './assets/haynes-logo-bw.png';
import * as React from 'react';

function App() {
    const [formData, setFormData] = useState({
        make: 'Ford',
        model: 'Capri',
        variant: `All V6 models (including Series III)
1974 to 1998 ▢ 2792 cc ▢ 2994 cc`,
        bookType: 'Owners Workshop Manual',
        image: 'src/assets/placeholder-img.png',
        background: '#8f083c'
    });

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}));
    }

    const style = {'--background-color': formData.background} as React.CSSProperties;

    return (
        <main style={style}>
            <section className="preview">
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
                    Object.keys(formData).map((key) => (
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
            </form>
        </main>
    )
}

export default App
