import { useShopLayout } from '@hooks';
import { ProductCard, ProductCardHorizontal, ViewMore } from '@ui';
import { PRODUCTS_GRID } from '@data';

export const ProductsGrid = ({ activeSelector, isMobile }) => {

    const {
        gridClasses,
        isVerticalCard,
        isHorizontalCard,
        cardVariant,
    } = useShopLayout({ activeSelector, isMobile })

    return (
        <div
            className='flex flex-col items-center gap-8'
        >
            <div
                className={`grid ${gridClasses}`}
            >
                {PRODUCTS_GRID.map((product, index) => (
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

            <ViewMore
                label="Show More"
            />
        </div>
    )
}

export default ProductsGrid;