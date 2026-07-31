import { FilterItem } from '@shop/filters';
import { ViewSelectors } from '@ui';
import { SHOP_CATEGORIES, SHOP_PRICES } from '@data';

export const Toolbar = ({
    label,
    activeSelector,
    onClick,
    activeCategory,
    setActiveCategory,
    activePrice,
    setActivePrice,
    activeSelector3x3
}) => {
    return (
        <>
            {activeSelector3x3 && (
                <p className='text-n7100 body-1-semi capitalize'>{label}</p>
            )}

            {!activeSelector3x3 && (
                <div className='w-full 2xl:w-fit flex flex-col 2xl:flex-row gap-6'>
                    <FilterItem
                        type="CATEGORIES"
                        items={SHOP_CATEGORIES}
                        activeSelector3x3={activeSelector3x3}
                        activeItem={activeCategory}
                        setActiveItem={setActiveCategory}
                    />
                    <FilterItem
                        type="PRICE"
                        items={SHOP_PRICES}
                        activeSelector3x3={activeSelector3x3}
                        activeItem={activePrice}
                        setActiveItem={setActivePrice}
                    />
                </div>
            )}

            <div
                className='w-full 2xl:w-auto py-2 2xl:py-0 flex items-center justify-between gap-8'
            >
                <ViewSelectors
                    activeSelector={activeSelector}
                    onClick={onClick}
                />
            </div>
        </>
    )
}

export default Toolbar;