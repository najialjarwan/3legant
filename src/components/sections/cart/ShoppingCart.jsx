import CartHeader from './CartHeader';
import CartProudcts from './cart-body/CartProducts'

const ShoppingCart = () => {
    return (
        <section
            className="
                px-8 2xl:px-40 pb-20 pt-4 2xl:pt-20
                flex flex-col gap-10 2xl:gap-20"
        >
            <CartHeader />

            <CartProudcts />
        </section>
    )
}

export default ShoppingCart;