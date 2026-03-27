import { Icon, ProductRating } from '@ui';
import { PRODUCT_REVIEWS } from "@data";

const ProductReviewList = () => (
    <div className='w-full flex flex-col gap-10'>
        <div className='flex flex-col 2xl:flex-row 2xl:justify-between gap-6'>
            <h6 className='text-black'>11 Reviews</h6>

            <div
                className='
                    w-full 2xl:w-[256px] pl-4 py-2 pr-2
                    flex items-center justify-between
                    border-2 border-n3100 rounded-lg'
            >
                <p className='text-n7100 body-2-semi'>Newest</p>

                <span className='size-8 flex items-center justify-center'>
                    <Icon
                        name='ChevronDown'
                        spanClassName='size-6'
                        iconClassName='w-[9px] h-[5.5px] text-n4100'
                    />
                </span>
            </div>
        </div>

        <div className='w-full flex flex-col gap-6'>
            {PRODUCT_REVIEWS.map((review) => (
                <div
                    key={review.name}
                    className='pb-4 2xl:pb-6 border-b border-b-n3100'
                >
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4 2xl:gap-10'>
                            <img
                                src={review.avatar}
                                alt=""
                                className="size-[72px]"
                            />

                            <div className='flex flex-col gap-4'>
                                <header className='text-n7100 body-1-semi [word-spacing:4px]'>
                                    {review.name}
                                </header>

                                <ProductRating rating={review.rating} />
                            </div>
                        </div>

                        <p className='2xl:ml-[112px] text-n3 body-2'>
                            {review.comment}
                        </p>

                        <div className='2xl:ml-[112px] flex gap-4'>
                            <p className='text-n2 caption-2'>about 1 hours ago</p>

                            <button className='text-n2 caption-2-semi'>Like</button>

                            <button className='text-n2 caption-2-semi'>Reply</button>
                        </div>
                    </div>
                </div>
            ))}

            <button
                className='
                    w-fit mx-auto px-10 py-1.5 
                    rounded-[80px] border border-b7100 btn-s'
            >
                Load More
            </button>
        </div>
    </div>
)

export default ProductReviewList;