import { useState } from 'react';
import { Icon } from '@ui';

const HEADER_ITEMS = ['Shopping cart', 'Checkout details', 'Order complete'];

const CartHeader = () => {
    const [activeItem, setActiveItem] = useState(HEADER_ITEMS[0]);
    
    return (
        <header className="flex flex-col gap-10">
            <button
                className="2xl:hidden flex items-center gap-1"
            >
                <Icon
                    name='ChevronLeft'
                    spanClassName='size-3'
                    iconClassName='w-[4px] h-[7px] text-black-600'
                />

                <span className='text-black-600 btn-sx'>Back</span>
            </button>

            <div className="flex flex-col 2xl:items-center gap-10 overflow-x-hidden">
                <h4 className="text-brand 2xl:h3 mx-auto">Cart</h4>

                <div className="w-max flex gap-8">
                    {HEADER_ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className={`
                            w-[256px] pb-6.5 
                            flex items-center gap-[17px]
                            ${activeItem === item ? 'border-b-2 border-b-n7100' : ''}
                            `}
                        >
                            <div
                                className={`
                                    size-[42px]
                                    flex items-center justify-center
                                    text-n8 rounded-full
                                    ${activeItem === item ? 'bg-n7100' : 'bg-n5'}
                                `}
                            >
                                {i + 1}
                            </div>

                            <p className={`text-n2 body-2-semi ${activeItem === item ? 'text-n7100' : 'text-n5'}`}>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default CartHeader;