import { FilterItem } from '@shop/filters';
import { CATEGORIES, PRICES } from '@data';

export const FilterItems = ({ activeSelector3x3 }) => {
    return (
        <>
            <div className={`flex flex-col ${activeSelector3x3 ? 'gap-4' : 'gap-2'}`}>
                <FilterItem
                    type="CATEGORIES"
                    items={CATEGORIES}
                    activeSelector3x3={activeSelector3x3}
                    label="living room"
                />
            </div>

            <div className={`flex flex-col ${activeSelector3x3 ? 'gap-4' : 'gap-2'}`}>
                <FilterItem
                    type="PRICE"
                    items={PRICES}
                    activeSelector3x3={activeSelector3x3}
                    label="all price"
                />
            </div>
        </>
    )
}

export default FilterItems;