import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './Title'

type ContentProps = {
    text1: string
    text2: string
}
const Content = (props: ContentProps) => {
    return (
        <React.Fragment>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title title="React" />

            <Title title="TS" />
            <Title title={10} />
            <Content text1="Paragraph 1" text2="Paragraph 2" />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{<App />}</React.StrictMode>)
