import { Dropdown, ViewSelectors } from '@ui';
import { SHOP_CATEGORIES, SHOP_PRICES } from '@data';
import { ToolbarFilterSection } from '@shop';

export const Toolbar = ({
    gridMode,
    onGridModeChange,
    activeCategory,
    setActiveCategory,
    activePrice,
    setActivePrice,
    isSidebarLayout
}) => {
    return (
        <div
            className={`
            p-8 2xl:p-0
            flex flex-col @sm:flex-row
            ${isSidebarLayout ? '2xl:items-start' : 'items-end'}
            2xl:justify-between gap-8 2xl:gap-0`}
        >
            {isSidebarLayout ? (
                <header className='text-n7100 body-1-semi capitalize'>
                    {SHOP_CATEGORIES[activeCategory].label}
                </header>
            ) : (
                <div className='w-full 2xl:w-fit flex flex-col 2xl:flex-row gap-6'>
                    <ToolbarFilterSection title="categories">
                        <Dropdown
                            items={SHOP_CATEGORIES}
                            value={activeCategory}
                            onChange={setActiveCategory}
                        />
                    </ToolbarFilterSection>
                    <ToolbarFilterSection title="price">
                        <Dropdown
                            items={SHOP_PRICES}
                            value={activePrice}
                            onChange={setActivePrice}
                        />
                    </ToolbarFilterSection>
                </div>
            )}

            <ViewSelectors
                gridMode={gridMode}
                onGridModeChange={onGridModeChange}
            />
        </div>
    )
}

export default Toolbar;