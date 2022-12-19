import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
    return (
        <div>
            <h1>Hello React</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                expedita facilis quas veritatis quo nemo ad, necessitatibus
                repellendus, sit ipsum saepe ullam rem asperiores voluptas iusto
                magnam officiis a minima!
            </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
