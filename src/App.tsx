import { useState } from 'react'
import './App.css'
import diagram from './assets/placeholder-img.png';
import haynesLogo from './assets/haynes-logo-bw.png';

function App() {
    const [count, setCount] = useState(0)

    return (
        <main>
            <section className="preview">
                <div className="top-section">
                    <header className="box-section">
                        <h1>
                            <div className="make">Ford</div>
                            <div className="model">Capri</div>
                            <div className="variant-info">
                                All V6 models (including Series III)<br />
                                1974 to 1998 ▢ 2792 cc ▢ 2994 cc
                            </div>
                        </h1>
                    </header>
                    <div className="logo box-section">
                        <img src={haynesLogo} alt="Haynes Logo"/>
                    </div>
                </div>

                <h2 className="book-type box-section">
                    Owners Workshop Manual
                </h2>
                <div className="diagram box-section">
                    <img src={diagram} alt="Diagram"/>
                </div>

            </section>
            <form className="controls">
                Controls
            </form>
        </main>
    )
}

export default App
