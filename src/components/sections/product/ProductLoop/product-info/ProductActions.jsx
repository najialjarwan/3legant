import { Stepper, Icon, AddToCartBtn } from '@ui';

const ProductActions = () => {
    return (
        <div className={`flex flex-col gap-4`}>
            <div className='flex items-center gap-2 2xl:gap-6'>
                <Stepper variant="alt" />

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