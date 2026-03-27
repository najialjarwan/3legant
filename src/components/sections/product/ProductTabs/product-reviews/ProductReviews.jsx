import ProductReviewsSummary from './ProductReviewsSummary';
import ProductReviewList from './ProductReviewsList';

const ProductReviews = () => (
    <div className='pt-10 @2xl:pt-12 flex flex-col gap-10'>
        <ProductReviewsSummary />
        <ProductReviewList />
    </div>
)

export default ProductReviews;