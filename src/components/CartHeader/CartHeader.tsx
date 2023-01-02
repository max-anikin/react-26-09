type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
    productsInCart: {
        [id: number]: number
    }
}
const CartHeader = ({ cartData, productsInCart }: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div>
                    {productId} : {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
