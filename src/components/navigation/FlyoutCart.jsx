import { Link } from 'react-router-dom';
import { asideClass } from '@navigation/FlyMenu.jsx';
import { CART_STEPS } from '@constants';
import { Icon, CartItems } from '@ui';

const FlyoutCart = ({ isOpen, onClose }) => {
    return (
        <aside
            data-id='Flyout Cart'
            className={`
            ${asideClass}
            right-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-20
            2xl:w-[413px] 2xl:py-10 2xl:h-screen`}
        >
            <div
                className={`
                    2xl:h-full pb-30 2xl:pb-0
                    flex flex-col 2xl:justify-between gap-14`}
            >
                {/* Top Container: Cart Products*/}
                <div
                    data-id='cartProducts'
                    className="
                w-full
                flex flex-col"
                >
                    {/* Brand & Close Menu Button */}
                    <header
                        className='
                    w-full
                    flex justify-between items-center gap-4'
                    >
                        <h6
                            className='
                        w-full
                        text-[#121212]'>Cart</h6>
                        <button
                            onClick={onClose}
                            className="
                        2xl:hidden"
                        >
                            <Icon
                                name="Close"
                                className="size-6 text-n4100"
                            />
                        </button>
                    </header>

                    {/* Cart Products Summary */}
                    <CartItems variant="primary" />
                </div>

                {/* Bottom Container: Cart Checkout */}
                <div
                    data-id='cartCheckout'
                    className="w-full flex flex-col gap-4 justify-between text-n7100"
                >
                    {/* Cart Sumamry */}
                    <div className="">
                        <p className="flex justify-between items-center py-3.25">
                            <span className='body-2'>Subtotal</span>
                            <span className='body-2-semi'>$99.00</span>
                        </p>
                        <div className="h-px bg-n3100"></div>
                        <p className="flex justify-between items-center py-3.25 h7">
                            <span>Total</span>
                            <span>$234.00</span>
                        </p>
                    </div>

                    {/* Cart Actions */}
                    <Link
                        to='/cart'
                        state={{ step: CART_STEPS.CHECKOUT }}
                        onClick={onClose}
                        className="
                        px-6.5 py-2.5
                        text-white btn-m text-center
                        bg-n7100 rounded-md
                        "
                    >
                        Checkout
                    </Link>

                    <Link
                        to='/cart'
                        onClick={onClose}
                        className="w-fit mx-auto text-black-900 caption-1-semi underline underline-offset-6">
                        View Cart
                    </Link>
                </div>
            </div>
        </aside>
    );
}

export default FlyoutCart;