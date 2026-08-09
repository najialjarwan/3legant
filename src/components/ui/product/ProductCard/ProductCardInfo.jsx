import { ProductRating } from '@ui';
import { formatPrice, finalPrice, calculateAverageRating } from '@utils';

const ProductCardInfo = ({ product }) => {
    return (
        <div
            className='flex flex-col gap-1'
        >
            <ProductRating rating={calculateAverageRating(product.reviews)} />

            <p className='text-n7100 body-2-semi capitalize'>
                {product.label}
            </p>

            <p className='flex items-center gap-3'>
                <span className='text-n7100 caption-1-semi'>
                    {formatPrice(finalPrice(product.price, product.discountPercentage))}
                </span>

                {product.discountPercentage && (
                    <span
                        className=' 
                    text-n4100 caption-1 line-through
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300 ease-out'
                    >
                        {formatPrice(product.price)}
                    </span>
                )}
            </p>
        </div>
    )
}

export default ProductCardInfo;