import ProductReviewsSummary from './ProductReviewsSummary';
import ProductReviewList from './ProductReviewsList';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '@data';

const ProductReviews = () => {
    const { id } = useParams();
    const product = PRODUCTS.find(
        product => product.id === Number(id)
    );

    return (
        <div className='pt-10 @2xl:pt-12 flex flex-col gap-10'>
            <ProductReviewsSummary product={product} />
            <ProductReviewList product={product} />
        </div>
    );
}

export default ProductReviews;