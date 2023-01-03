import { Grid } from '@mui/material'
import ProductsListItem from './ProductstListItem'
import productsArray from 'utils/ProductsArray'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

type ProductProps = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    (
                        {
                            title,
                            desc,
                            type,
                            capacity,
                            price,
                            id,
                            image,
                        }: ProductProps,
                        i
                    ) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id={id}
                                title={title}
                                desc={desc}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
