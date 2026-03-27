import { Icon, AddToCartBtn } from '@ui';

const ProductActions = () => {
    return (
        <div className={`flex flex-col gap-4`}>
            <div className='flex items-center gap-2 2xl:gap-6'>
                <div className='h-8 2xl:h-auto px-2 2xl:px-4 2xl:py-3 flex items-center bg-black-100'>
                    <div className='2xl:h-7 flex items-center gap-[13px] 2xl:gap-6'>
                        <Icon
                            name="Minus"
                            spanClassName='size-4 2xl:size-5'
                            iconClassName='w-[10px] 2xl:w-[12px] text-black-900'
                        />
                        <span
                            className='
                            text-black-900 text-[12px] 2xl:text-[16px] leading-5 2xl:leading-6.5 font-inter font-semibold'>
                            1
                        </span>
                        <Icon
                            name="Add"
                            spanClassName='size-4 2xl:size-5'
                            iconClassName='w-[10px] 2xl:w-[13px] 2xl:h-[13px] text-black-900'
                        />
                    </div>
                </div>

                <button
                    className='
                    w-full px-10 py-1 2xl:py-2.5
                    flex items-center justify-center gap-2
                    rounded-sm 2xl:rounded-lg border border-n7100'
                >
                    <Icon
                        name='Heart'
                        spanClassName='size-4 2xl:size-6'
                        iconClassName='w-[15px] h-[12px] 2xl:w-[24px] 2xl:h-[18px] text-n7100'
                    />
                    <span className='text-n7100 btn-xs 2xl:btn-m'>Wishlist</span>
                </button>
            </div>

            <AddToCartBtn
                className='
                w-full px-10 py-1 2xl:py-2.5
                text-white btn-xs 2xl:btn-m rounded-sm 2xl:rounded-lg'
            />
        </div>
    )
}

export default ProductActions;