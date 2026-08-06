import { ProductRating } from '@ui';
import { calculateAverageRating, formatPrice, finalPrice } from '@utils';

const ProductSummary = ({ product }) => {
    return (
        <div
            className={`flex flex-col gap-4`}
        >
            <div className='flex gap-2.5'>
                <ProductRating rating={calculateAverageRating(product.reviews)} />
                <span className='text-n7100 caption-2'>{product.reviews.length} Reviews</span>
            </div>

            <h4>{product.label}</h4>

            <p className='w-full text-n4100 body-2'>{product.preview}</p>

            <div className='flex items-center gap-3'>
                <h6 className='text-black-900'>
                    {formatPrice(finalPrice(product.price, product.discountPercentage))}
                </h6>
                <p className='h7 text-n4100 line-through'>{formatPrice(product.price)}</p>
            </div>
        </div>
    )
}

export default ProductSummary;