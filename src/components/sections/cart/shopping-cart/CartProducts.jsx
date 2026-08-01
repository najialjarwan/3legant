import { useBreakpoint } from '@hooks';
import { CartItems, CartProductItem } from '@ui';

const CartProducts = ({ }) => {
    const { isMobile } = useBreakpoint();

    return (
        <div className='w-full 2xl:w-auto'>
            <header className='
                    w-full 2xl:min-w-[643px] pb-6
                    flex justify-between
                    text-black-900 body-2-semi
                    border-b border-b-n4100
                '
            >
                <span>Proudct</span>

                <div className='w-[322px] hidden 2xl:inline-flex justify-between'>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Subtotal</span>
                </div>
            </header>

            {isMobile ? (
                <CartItems variant="secondary" />
            ) : (
                <CartItems
                    variant="secondary"
                    ItemComponent={CartProductItem}
                />
            )}
        </div>
    )
}

export default CartProducts;