import { calculateAverageRating } from '@utils';
import { Icon, ProductRating } from '@ui';

const ProductReviewsSummary = ({ product }) => (
    <div className='flex flex-col gap-8 2xl:gap-8'>
        <div className='flex flex-col gap-6'>
            <p className='text-n2 h7 2xl:h6'>Customer Reviews</p>

            <div className='flex flex-col gap-2'>
                <div className='flex gap-2'>
                    <ProductRating rating={calculateAverageRating(product.reviews)} />
                    <span className='text-n7100 caption-2'>{product.reviews.length} Reviews</span>
                </div>

                <div className='flex gap-2'>
                    {product.reviews.length == 0 && (
                        <p className='text-n7100 caption-1'>Be the first to review</p>
                    )}
                    <p className='text-n2 caption-1-semi 2xl:body-2-semi capitalize'>{product.label}</p>
                </div>
            </div>
        </div>

        <div
            className='
                    w-full pl-6 pr-4 py-4
                    flex items-center justify-between
                    rounded-2xl border-2 border-n3100'
        >
            <form className='size-fit'>
                <input
                    type="text"
                    placeholder='Share your thoughts'
                    className='
                            w-[135px] 2xl:w-[154px] block
                            text-n4100 caption-1
                            outline-none'
                />
            </form>

            <button
                className='
                        p-1 @2xl:px-10 @2xl:py-1.5
                        flex items-center justify-center
                        bg-n7100 rounded-full'
            >
                <span className='hidden @2xl:inline text-white btn-s'>Write Review</span>
                <Icon
                    name='ArrowRightLong'
                    spanClassName='@2xl:hidden size-6'
                    iconClassName='w-[14px] h-[9px]'
                />
            </button>
        </div>
    </div>
)

export default ProductReviewsSummary;