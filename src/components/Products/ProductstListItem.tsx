import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import './ProductsListItem.scss'

type Props = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
}

const ProductsListItem = (props: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevState: number) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState: number) => prevState - 1)
    }

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
                    <Button
                        variant="outlined"
                        onClick={onDecrementClick}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField value={count} size="small" />
                    <Button variant="outlined" onClick={onIncrementClick}>
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => props.addProductToCart(props.id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
