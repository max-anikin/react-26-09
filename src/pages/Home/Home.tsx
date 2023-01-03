import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
const Home = ({ addProductToCart }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                List of Items{' '}
            </Typography>
            <ProductsList addProductToCart={addProductToCart} />
        </>
    )
}
export default Home
