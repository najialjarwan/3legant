import { Icon, Stepper } from '@ui';
import { useBreakpoint } from '@hooks';

const cartItems = [
    {
        image: 'src/assets/images/product image 1 black.png',
        name: 'Tray Table',
        color: 'black',
        quantity: 2,
        price: 19,
    },
    {
        image: 'src/assets/images/product image 1 red.png',
        name: 'Tray Table 2',
        color: 'red',
        quantity: 2,
        price: 19,
    },
    {
        image: 'src/assets/images/product image 3.png',
        name: 'Table Lamp',
        color: 'Gold',
        quantity: 1,
        price: 39,
    },
]

const CartProducts = ({ }) => {
    const { isMobile } = useBreakpoint();

    return (
        <div className='w-full 2xl:w-auto'>
            <header
                className='
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

            <ul
                className='
                    flex flex-col gap-6'
            >
                {cartItems.map((item) => (
                    <li
                        key={item.name}
                        className='
                            py-6
                            flex items-center gap-4
                            border-b border-b-n3100
                        '
                    >
                        <div className='w-20 h-24 bg-n2100'>
                            <img
                                src={item.image}
                                alt={`${item.name} image`}
                                className="size-full object-contain object-center"
                            />
                        </div>

                        <div
                            className='
                                w-full flex justify-between
                            '
                        >
                            <div className='flex flex-col gap-2'>
                                <p className='text-n7100 caption-1-semi'>{item.name}</p>

                                <p className='text-n4100 caption-2'>Color: {item.color}</p>

                                {isMobile ? (
                                    <Stepper quantity={item.quantity} />
                                ) : (
                                    <div>
                                        <button
                                            className='flex gap-1 items-center text-n4100'
                                        >
                                            <Icon
                                                name="Close"
                                                spanClassName="size-6"
                                            />
                                            <span className='caption-1-semi'>Remove</span>
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div
                                className='
                                    2xl:w-[322px]
                                    flex flex-col 2xl:flex-row items-end 2xl:items-center 2xl:justify-between
                                    gap-2 2xl:gap-0
                                '
                            >
                                {!isMobile && (
                                    <Stepper quantity={item.quantity} />
                                )}
                                <p
                                    className='
                                        text-black-900 caption-1-semi 2xl:text-lg/[30px] 2xl:font-normal
                                    '
                                >
                                    ${item.price.toFixed(2)}
                                </p>

                                <p className='hidden 2xl:block text-lg/[30px] font-semibold'>
                                    ${ (item.price * item.quantity).toFixed(2) }
                                </p>

                                <button
                                    className='2xl:hidden'
                                >
                                    <Icon
                                        name="Close"
                                        spanClassName="size-6"
                                        iconClassName="text-n4100"
                                    />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CartProducts;