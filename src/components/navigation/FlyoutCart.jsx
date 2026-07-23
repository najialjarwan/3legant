import { Link } from 'react-router-dom';
import { asideClass } from '@navigation/FlyMenu.jsx';
import { Icon } from '@ui';
import { formatPrice } from '@utils';
import { CART_ITEMS } from '@data';

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
                    <ul className="
                    w-full
                    flex flex-col gap-4 2xl:gap-6"
                    >
                        {CART_ITEMS.map((item, i) => (
                            <li
                                key={i}
                                className="
                            w-full py-6"
                            >
                                <div className="
                                w-full
                                flex gap-4"
                                >
                                    <div
                                        className='
                                    w-20 h-24
                                    bg-n2100'>
                                        <img
                                            src={item.image}
                                            alt={`${item.name} image`}
                                            className="size-full object-cover object-center"
                                        />
                                    </div>

                                    <div
                                        className="
                                    w-49.75 2xl:w-[267px]
                                    flex flex-col gap-2"
                                    >
                                        <p className="w-full
                                    flex justify-between items-center
                                    text-n7100 caption-1-semi">
                                            <span>{item.name}</span>
                                            <span>{formatPrice(item.price)}</span>
                                        </p>

                                        <p className="w-full
                                    flex justify-between items-center
                                    text-n4100 caption-2">
                                            <span className=''>Color: {item.color}</span>
                                            <span><Icon name="Close" className='size-6' /></span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
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
                    <button className="px-6.5 py-2.5 bg-n7100 rounded-md text-white btn-m">
                        Checkout
                    </button>

                    <Link
                        to='/cart'
                        className="w-fit mx-auto text-[#121212] caption-1-semi underline underline-offset-6">
                        View Cart
                    </Link>
                </div>
            </div>
        </aside>
    );
}

export default FlyoutCart;