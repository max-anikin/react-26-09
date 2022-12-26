import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'
type Props = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductsListItem = (props: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-img">
                    <img
                        src={props.image}
                        alt={props.title}
                        title={props.title}
                    />
                </div>
                <div className="product-title">{props.title}</div>
                <div className="product-decs">{props.desc}</div>
                <div className="product-features">
                    <span>Type:</span> {props.type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {props.capacity}Gb
                </div>
                <div className="product-price">
                    <span>Price:</span> {props.price}$
                </div>
                <div className="product-quantity">
                    <Button variant="outlined">-</Button>
                    <TextField value="1" size="small" />
                    <Button variant="outlined">+</Button>
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
