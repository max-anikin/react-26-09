import { Grid } from '@mui/material'
import ProductsListItem from './ProductstListItem'
import productsArray from 'utils/ProductsArray'

type Props = {}

type ProductProps = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

const ProductsList = (props: Props) => {
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
                        }: ProductProps,
                        i
                    ) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                title={title}
                                desc={desc}
                                type={type}
                                capacity={capacity}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
