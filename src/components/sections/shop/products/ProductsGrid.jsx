import { useShopLayout } from '@hooks';
import { ProductCard, ProductCardHorizontal } from '@ui';

export const ProductsGrid = ({ gridMode, isMobile, products }) => {
    const {
        gridClasses,
        isVerticalCard,
        isHorizontalCard,
        cardVariant,
    } = useShopLayout({ gridMode, isMobile })

    return (

        <div className={`grid ${gridClasses}`}>
            {products.map((product, index) => (
                <div
                    key={index}
                    className='flex flex-col gap-3 group cursor-pointer'
                >
                    {isVerticalCard && (
                        <ProductCard
                            product={product}
                            variant={cardVariant}
                        />
                    )}

                    {isHorizontalCard && (
                        <div className='px-8 2xl:px-0 flex flex-col 2xl:flex-row gap-4 2xl:gap-0'>
                            <ProductCardHorizontal product={product} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ProductsGrid;