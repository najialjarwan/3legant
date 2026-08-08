import { useState } from 'react';
import { Icon } from '@ui';

const Stepper = ({ quantity = 1, variant = 'def' }) => {
    const [productQuantity, setProductQuantity] = useState(quantity);
    const handleDecrease = () => {
        setProductQuantity(prev => (prev > 1 ? prev - 1 : 1))
    }
    const handleIncrease = () => {
        setProductQuantity(prev => prev + 1)
    }

    const VARIANT = {
        def: `
        w-20 px-2 py-1.5
        shrink-0
        caption-2-semi
        bg-transparent border border-n4100 rounded-sm
        `,
        alt: `
        w-20 2xl:w-[127px] h-full px-2 2xl:px-4 py-1.5 2xl:py-3
        shrink-0
        caption-2-semi 2xl:body-2-semi
        bg-black-100 rounded-sm 2xl:rounded-lg
        `
    }

    return (
        <div className={`${VARIANT[variant]}`}>
            <div className='w-full flex items-center justify-between'>
                <button onClick={handleDecrease}>
                    <Icon
                        name="Minus"
                        spanClassName={`${variant === "alt" ? 'size-4 2xl:size-5' : 'size-4'}`}
                    />
                </button>

                <span
                    className={`
                    text-black-900
                    ${variant === "alt" ? 'caption-2-semi 2xl:body-2-semi' : 'caption-2-semi'}
                    `}
                >
                    {productQuantity}
                </span>

                <button onClick={handleIncrease}>
                    <Icon
                        name="Add"
                        spanClassName={`${variant === "alt" ? 'size-4 2xl:size-5' : 'size-4'}`}
                    />
                </button>
            </div>
        </div>
    )
}

export default Stepper;