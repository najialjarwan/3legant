import { CART_ITEMS } from '@data';

const OrderCompleteItems = () => (
    <ul className='w-full 2xl:w-auto flex justify-between 2xl:gap-10'>
        {CART_ITEMS.map((item) => (
            <li
                key={item.name}
                className='
                relative
                w-[88px] 2xl:w-[96px] h-[104px] 2xl:h-[112px]
                flex items-end justify-start
                '
            >
                <div className='w-[80px] h-[96px] bg-n2100'>
                    <img
                        src={item.image}
                        alt={item.name}
                        className='size-full object-contain'
                    />
                </div>
                <span
                    className='
                    absolute top-0 right-0
                    size-4 2xl:size-8
                    flex items-center justify-center
                    text-n8 text-[10px]/[10px] 2xl:text-[16px]/[24px] font-inter font-semibold
                    bg-n7100 rounded-full
                    '
                >
                    {item.quantity}
                </span>
            </li>
        ))}
    </ul>
)

export default OrderCompleteItems;