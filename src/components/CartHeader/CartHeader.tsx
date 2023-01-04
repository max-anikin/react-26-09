import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/ProductsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    console.log(productsArray)
    console.log(productsObject)
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].title} : {'  '}
                    {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}

export default CartHeader
