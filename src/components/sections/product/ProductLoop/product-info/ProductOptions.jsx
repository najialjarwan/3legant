import { Icon } from '@ui';

const PRODUCT_COLORS = [
    "src/assets/images/product image 1 black.png",
    "src/assets/images/product image 1 brown.png",
    "src/assets/images/product image 1 red.png",
    "src/assets/images/product image 1 white.png",
]

const ProductOptions = () => {
    return (
        <div className={`flex flex-col gap-6`}>
            <div className='flex flex-col gap-2'>
                <p className='text-n4100 body-2-semi'>Measurements</p>
                <p className='text-black body-1'>17 1/2x20 5/8 "</p>
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

                    <p className='text-black body-1'>Black</p>
                </div>

                <div className='w-full max-w-[334px] flex justify-between'>
                    {PRODUCT_COLORS.map((colors, i) => (
                        <img
                            key={i}
                            src={colors}
                            alt=""
                            className="h-[72px]"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductOptions;