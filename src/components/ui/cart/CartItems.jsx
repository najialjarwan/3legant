import { Icon, Stepper } from '@ui';
import { useBreakpoint } from '@hooks';
import { CART_ITEMS } from '@data';

const CartItems = ({ canRemoveItem = true }) => {
    const { isMobile } = useBreakpoint();

    return (
        <ul className='flex flex-col gap-6'>
            {CART_ITEMS.map((item) => (
                <li
                    key={item.name}
                    className='
                        py-6
                        flex items-center gap-4
                        border-b border-b-n3100'
                >
                    <div className='w-20 h-24 bg-n2100'>
                        <img
                            src={item.image}
                            alt={`${item.name} image`}
                            className="size-full object-cover object-center"
                        />
                    </div>

                    <div className='w-full flex justify-between'>

                        <div className='flex flex-col gap-2'>
                            <p className='text-n7100 caption-1-semi'>{item.name}</p>

                            <p className='text-n4100 caption-2'>Color: {item.color}</p>

                            {isMobile || !canRemoveItem ? (
                                <Stepper quantity={item.quantity} />
                            ) : (
                                <div>
                                    <button className='flex gap-1 items-center text-n4100'>
                                        <Icon name="Close" spanClassName="size-6" />

                                        <span className='caption-1-semi'>Remove</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className={`
                            flex flex-col items-end
                            gap-2
                            ${canRemoveItem ? '2xl:w-[322px] 2xl:flex-row  2xl:items-center 2xl:justify-between 2xl:gap-0' : ''}
                            `}
                        >
                            {canRemoveItem && !isMobile && (<Stepper quantity={item.quantity} />)}

                            <p className={`
                                text-black-900 caption-1-semi
                                ${canRemoveItem ? '2xl:w-[100px] 2xl:text-right' : ''}
                                `}
                            >
                                ${item.price.toFixed(2)}
                            </p>

                            <p className={`
                                hidden text-lg/[30px] font-semibold
                                ${canRemoveItem ? '2xl:block' : ''}`
                            }
                            >
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>

                            {canRemoveItem && (
                                <button className='2xl:hidden'>
                                    <Icon name="Close" spanClassName="size-6" iconClassName="text-n4100" />
                                </button>
                            )}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CartItems;