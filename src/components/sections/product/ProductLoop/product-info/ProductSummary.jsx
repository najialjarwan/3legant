import { ProductRating } from '@ui';
import { formatPrice, finalPrice } from '@utils';

const ProductSummary = () => {
    const price = formatPrice(finalPrice(400, 50));
    return (
        <div
            className={`flex flex-col gap-4`}
        >
            <div className='flex gap-2.5'>
                <ProductRating rating={5} />
                <span className='text-n7100 caption-2'>11 Reviews</span>
            </div>

            <h4>Tray Table</h4>

            <p className='w-full text-n4100 body-2'>
                Buy one or buy a few and make every space where you sit more convenient.
                Light and easy to move around with removable tray top, handy for serving snacks.
            </p>

            <div className='flex items-center gap-3'>
                <h6 className='text-black-900'>{price}</h6>
                <p className='h7 text-n4100 line-through'>{formatPrice(400)}</p>
            </div>
        </div>
    )
}

export default ProductSummary;