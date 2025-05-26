import { useState } from 'react'
import './App.css'

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
                        </h1>
                    </header>
                    <div className="logo box-section"></div>
                </div>

                <h2 className="book-type box-section">
                    Owners Workshop Manual
                </h2>
                <div className="image">
                    <img src="./assets/placeholder-img.png"/>
                </div>

            </section>
            <form className="controls">
                Controls
            </form>
        </main>
    )
}

export default App
