import { Icon } from '@ui';

const cartItems = [
    {
        image: 'src/assets/images/product image 1.png',
        name: 'Tray Table',
        color: 'black',
        quantity: 2,
        price: 19.19,
    },
    {
        image: 'src/assets/images/product image 2.png',
        name: 'Tray Table',
        color: 'red',
        quantity: 2,
        price: 19.19,
    },
    {
        image: 'src/assets/images/product image 3.png',
        name: 'Table Lamp',
        color: 'Gold',
        quantity: 2,
        price: 39,
    },
]

const CartProducts = ({ }) => {
    return (
        <div
            className='

            '
        >
            <header
                className='
                    pb-6
                    text-black-900 body-2-semi
                    border-b border-b-n4100
                '
            >
                Product
            </header>

            <ul
                className='
                    flex flex-col gap-6'
            >
                {cartItems.map((item) => (
                    <li
                        key={item.name}
                        className='
                            w-full py-6
                            flex items-center gap-4
                            border-b border-b-n3100
                        '
                    >
                        <div className='w-20 h-24 bg-n2100'>
                            <img
                                src={item.image}
                                alt={`${item.name} image`}
                                className="size-full object-cover object-center"
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

                                <div
                                    className='
                                        px-2 py-1.5
                                        flex items-center gap-3
                                        border border-n4100 rounded-sm
                                    '
                                >
                                    <Icon
                                        name="Minus"
                                        spanClassName="size-4"
                                        iconClassName="w-[9.33px] text-black-900"
                                    />

                                    <span className='text-black-900 caption-2-semi'>{item.quantity}</span>

                                    <Icon
                                        name="Add"
                                        spanClassName="size-4"
                                        iconClassName="size-[10.08px] ext-black-900"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col items-end gap-2'>
                                <p className='text-black-900 caption-1-semi'>{item.price}</p>

                                <button
                                    className=''
                                >
                                    <Icon
                                        name="Close"
                                        spanClassName="size-6"
                                        iconClassName="size-[14px]text-n4100"
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