import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'

type Props = {}

type CartData = {
    totalCount: number
    totalPrice: number
}

type ProductsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })

    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 1,
    })

    const addProductToCart = (count: number, price: number) => {
        setCartData((prevState: CartData) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + price * count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} productsInCart={productsInCart} />
            <Main addProductToCart={addProductToCart} />
        </StyledEngineProvider>
    )
}
export default App
