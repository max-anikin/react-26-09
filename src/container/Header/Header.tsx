import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Menu from 'components/Menu/Menu'
import CartHeader from 'components/CartHeader/CartHeader'
import Logo from 'components/Logo/Logo'
import './Header.scss'

type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
    productsInCart: {
        [id: number]: number
    }
}
const Header = ({ cartData, productsInCart }: Props) => {
    let appBar = false
    // console.log(cartData)
    return (
        <>
            <AppBar
                position="static"
                className={`${appBar ? 'app-bar-grey' : 'app-bar'}`}
            >
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Logo />
                        <Menu />
                        <CartHeader
                            cartData={cartData}
                            productsInCart={productsInCart}
                        />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Header
