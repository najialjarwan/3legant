import { useState } from 'react';
import { useBreakpoint, useExpandableList } from '@hooks';
import { GRID_MODES, SHOP_CATEGORIES_ITEMS, SHOP_PRICES_ITEMS } from '@constants'
import { PRODUCTS_GRID, SHOP_PRICES } from '@data';
import { setGridItemsLimit } from '@utils';
import { ShowMoreBtn } from '@ui';
import { Sidebar, Toolbar, ProductsGrid } from '@shop';

export const ShopLayout = () => {
    const { isMobile } = useBreakpoint();

    // Layout
    const [gridMode, setGridMode] = useState(isMobile ? GRID_MODES.GRID_4X2 : GRID_MODES.GRID_3X3);
    const isSidebarLayout = gridMode === GRID_MODES.GRID_3X3 || (!isMobile && gridMode === GRID_MODES.GRID_4X1);

    // Category filter
    const [activeCategory, setActiveCategory] = useState(SHOP_CATEGORIES_ITEMS.ALL);
    const filterByCategory = product => {
        if (activeCategory === SHOP_CATEGORIES_ITEMS.ALL) {
            return true;
        }

        return product.category === activeCategory;
    };

    // Price filter
    const [activePrice, setActivePrice] = useState(SHOP_PRICES_ITEMS.ALL);
    const [selectedPrices, setSelectedPrices] = useState([SHOP_PRICES_ITEMS.ALL],);

    const effectiveSelectedPrices = isSidebarLayout ? selectedPrices : [activePrice];
    const selectedRanges = SHOP_PRICES.filter(price => effectiveSelectedPrices.includes(price.id));
    const filterByPrice = (product) => {
        if (effectiveSelectedPrices.includes(SHOP_PRICES_ITEMS.ALL)) {
            return true;
        }

        const discountedPrice =
            product.price * (product.discountPercentage / 100);

        return selectedRanges.some(range =>
            discountedPrice >= range.min &&
            discountedPrice <= range.max
        );
    };

    // Final products
    const filteredProducts = PRODUCTS_GRID
        .filter(filterByCategory)
        .filter(filterByPrice);

    const gridLimit = setGridItemsLimit(gridMode, GRID_MODES);
    const {
        visibleItems,
        canExpand,
        expanded,
        handleToggle,
    } = useExpandableList({
        items: filteredProducts,
        initialVisibleCount: gridLimit,
    });

    return (
        <section
            className={`
            @container
            pb-20 2xl:pb-25 2xl:px-40 2xl:pt-15
            ${isSidebarLayout ? 'flex flex-row gap-6' : ''}`}
        >
            {isSidebarLayout && (
                <Sidebar
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    selectedPrices={selectedPrices}
                    setSelectedPrices={setSelectedPrices}
                />
            )}

            <div
                className={`
                flex flex-col shrink-0
                ${isMobile && gridMode === GRID_MODES.GRID_4X1 ? 'gap-10' : 'gap-8 2xl:gap-10'}
                `}
            >
                <Toolbar
                    gridMode={gridMode}
                    onGridModeChange={setGridMode}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    activePrice={activePrice}
                    setActivePrice={setActivePrice}
                    isSidebarLayout={isSidebarLayout}
                />

                <div
                    className='flex flex-col items-center gap-8'
                >
                    <ProductsGrid
                        products={visibleItems}
                        gridMode={gridMode}
                        isMobile={isMobile}
                        visibleProducts={visibleItems}
                    />

                    {canExpand && (
                        <ShowMoreBtn
                            onClick={handleToggle}
                            label={expanded ? 'Show less' : 'Show more'}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default ShopLayout;