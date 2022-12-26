import { Grid } from '@mui/material'
import ProductsListItem from './ProductstListItem'

type Props = {}

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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone X"
                        desc="This is iPhone X"
                        type="phone"
                        capacity="64"
                        price={999}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 14 Pro"
                        desc="This is iPhone 14 Pro"
                        type="phone"
                        capacity="32"
                        price={799}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 13"
                        desc="This is iPhone 13"
                        type="phone"
                        capacity="16"
                        price={499}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
