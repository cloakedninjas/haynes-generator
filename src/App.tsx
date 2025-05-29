import { useState } from 'react'
import './App.css'
import diagram from './assets/placeholder-img.png';
import haynesLogo from './assets/haynes-logo-bw.png';

const make = 'Ford';
const model = 'Capri';
const variant = `All V6 models (including Series III)
1974 to 1998 ▢ 2792 cc ▢ 2994 cc`;
const bookType = 'Owners Workshop Manual';
const img = diagram;

function App() {
    const [count, setCount] = useState(0)

    return (
        <main>
            <section className="preview">
                <div className="top-section">
                    <header className="box-section">
                        <h1>
                            <div className="make">{ make }</div>
                            <div className="model">{ model }</div>
                        </h1>
                        <h2 className="variant-info">{ variant }</h2>
                    </header>
                    <div className="logo box-section">
                        <img src={haynesLogo} alt="Haynes Logo"/>
                    </div>
                </div>

                <h2 className="book-type box-section">{ bookType }</h2>
                <div className="diagram box-section" style={{backgroundImage: `url(${img}`}}>
                </div>

            </section>
            {/*<form className="controls">
                Controls
            </form>*/}
        </main>
    )
}

export default App
