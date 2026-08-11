import { useState } from 'react';
import { Icon } from '@ui';

const ProductOptions = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState(Object.values(product.variants ?? {})[0]?.color || '');

    return (
        <div className={`flex flex-col gap-6`}>
            <div className='flex flex-col gap-2'>
                <p className='text-n4100 body-2-semi'>Measurements</p>
                <p className='text-black body-1'>{product.measurements}</p>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-1 text-n4100'>
                        <p className='body-2-semi'>Choose Color</p>
                        <Icon
                            name="ChevronRight"
                            spanClassName='size-6'
                            iconClassName='w-[7px] h-[15px]'
                        />
                    </div>

                    <p className='text-black body-1 capitalize'>{selectedColor}</p>
                </div>

                <ul className='w-full max-w-[334px] flex justify-between'>
                    {Object.values(product.variants ?? {}).map((variant) => (
                        <li
                            key={variant.color}
                            onClick={() => setSelectedColor(variant.color)}
                            className={`
                            size-[71px] border cursor-pointer
                            ${selectedColor === variant.color ? 'border-n7100' : 'border-transparent'}`}
                        >
                            <img
                                src={variant.image}
                                alt=""
                                className="size-full object-contain"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProductOptions;