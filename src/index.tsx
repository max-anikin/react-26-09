import React from 'react'
import ReactDOM from 'react-dom/client'

// const App = () => {
//     return (
//         <div>
//             <h1>Hello React</h1>
//             <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
//                 expedita facilis quas veritatis quo nemo ad, necessitatibus
//                 repellendus, sit ipsum saepe ullam rem asperiores voluptas iusto
//                 magnam officiis a minima!
//             </p>
// ;<p>
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum expedita
//     facilis quas veritatis quo nemo ad, necessitatibus repellendus, sit ipsum
//     saepe ullam rem asperiores voluptas iusto magnam officiis a minima!
// </p>
//         </div>
//     )
// }

const Title = () => {
    return <h1>Hello React</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus officia architecto repellendus at nulla nam
                quibusdam esse? Aut dicta animi sed quos voluptatibus ad, cum
                inventore recusandae non quis eligendi!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus officia architecto repellendus at nulla nam
                quibusdam esse? Aut dicta animi sed quos voluptatibus ad, cum
                inventore recusandae non quis eligendi!
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{<App />}</React.StrictMode>)
