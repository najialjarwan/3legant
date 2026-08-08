import { useState } from 'react';
import { ProductRating, Dropdown, ShowMoreBtn } from '@ui';
import { REVIEWS_FILTER } from '@constants';
import { REVIEWS_FILTER_ITEMS, USERS } from "@data";
import { mergeReviewsWithUsers, calculateTimeAgo } from '@utils';

const ProductReviewList = ({ product }) => {
    const [reviewFilter, setReviewFilter] = useState(REVIEWS_FILTER.NEWEST);
    const [reviewCount, setReviewCount] = useState(5);
    const usersReview = mergeReviewsWithUsers(product.reviews, USERS);

    return (
        <div className='w-full flex flex-col gap-10'>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-between gap-6'>
                <h6 className='text-black'>{product.reviews.length} Reviews</h6>

                <Dropdown
                    items={REVIEWS_FILTER_ITEMS}
                    value={reviewFilter}
                    onChange={setReviewFilter}
                    className="2xl:max-w-[256px] border-n3100!"
                />
            </div>

            <div className='w-full flex flex-col items-center gap-6'>
                {usersReview.slice(0, reviewCount).map((review) => (
                    <div
                        key={review.user.userName}
                        className='w-full pb-4 2xl:pb-6 border-b border-b-n3100'
                    >
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-4 2xl:gap-10'>
                                <img
                                    src={review.user.avatar}
                                    alt=""
                                    className="size-[72px]"
                                />

                                <div className='flex flex-col gap-4'>
                                    <header className='text-n7100 body-1-semi [word-spacing:4px]'>
                                        {review.user.userName}
                                    </header>

                                    <ProductRating rating={review.rating} />
                                </div>
                            </div>

                            <p className='2xl:ml-[112px] text-n3 body-2'>
                                {review.comment}
                            </p>

                            <div className='2xl:ml-[112px] flex gap-4'>
                                <p className='text-n2 caption-2'>{calculateTimeAgo(review.datePosted)}</p>

                                <button className='text-n2 caption-2-semi'>Like</button>

                                <button className='text-n2 caption-2-semi'>Reply</button>
                            </div>
                        </div>
                    </div>
                ))}

                <ShowMoreBtn
                    onClick={() => setReviewCount((prev) => prev + 5)}
                    disabled={reviewCount === USERS.length}
                    label="load more"
                />
            </div>
        </div>
    );
}

export default ProductReviewList;