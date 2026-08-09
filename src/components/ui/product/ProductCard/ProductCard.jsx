import { Link } from 'react-router-dom';
import { Badges, WishlistBtn, AddToCartBtn, ProductCardInfo } from '@ui';

const ProductCard = ({ product, variant }) => {
    const VARIANTS = {
        sm: 'w-[152px] h-[203px]',
        md: 'w-[231px] 2xl:w-[262px] h-[308px] 2xl:h-[349px]',
    }
    return (
        <>
            <Link
                to={`/product/${product.id}`}
                className={`relative bg-n2100 group cursor-pointer ${VARIANTS[variant]}`}
            >
                <img
                    src={product.image}
                    alt={`${product.image} image`}
                    className="size-full object-contain"
                />

                <Badges
                    variant='medium'
                    discountPercentage={product.discountPercentage}
                    containerClass='left-4 top-4'
                    isNew={product.isNew}
                />

                <WishlistBtn variant={variant} />

                <AddToCartBtn
                    className={`
                    absolute right-1/2 translate-x-1/2 bottom-3.5 2xl:bottom-4 2xl:translate-y-1/2
                    text-n1100
                    opacity-100 2xl:opacity-0
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-400 east-out
                    ${variant === 'sm'
                            ? 'w-[128px] px-4 py-1 btn-xs rounded-sm'
                            : 'w-[203px] 2xl:w-[230px] px-6 py-2 btn-s rounded-lg'}
                    `}
                />
            </Link>

            <ProductCardInfo product={product} />
        </>
    );
}

export default ProductCard;