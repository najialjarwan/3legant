import CartHeader from './CartHeader';
import CartProudcts from './CartProducts'
import CartCoupon from './CartCoupon';
import CartSummary from './CartSummary';
import { useBreakpoint } from '@hooks';

const ShoppingCart = () => {
    const { isMobile } = useBreakpoint();

    return (
        <section
            className="
                px-8 2xl:px-40 pb-20 pt-4 2xl:pt-20
                flex flex-col gap-10 2xl:gap-20"
        >
            <CartHeader />

            <div className='flex justify-between'>
                <CartProudcts />
                {!isMobile && <CartSummary />}
            </div>

            <CartCoupon />

            {isMobile && <CartSummary />}
        </section>
    )
}

export default ShoppingCart;