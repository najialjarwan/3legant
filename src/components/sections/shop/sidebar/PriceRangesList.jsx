import { SHOP_PRICES_ITEMS } from '@constants';
import { SHOP_PRICES } from '@data';
import { Checkbox } from '@ui';

const PriceRangesList = ({ values, onToggle }) => {
    const togglePriceRange = (id) => {
        onToggle((prev) => {
            if (id === SHOP_PRICES_ITEMS.ALL) {
                return [SHOP_PRICES_ITEMS.ALL];
            }

            const withoutAll = prev.filter(
                (price) => price !== SHOP_PRICES_ITEMS.ALL
            );

            if (withoutAll.includes(id)) {
                const updatedPrices = withoutAll.filter(
                    (price) => price !== id
                );

                return updatedPrices.length > 0
                    ? updatedPrices
                    : [SHOP_PRICES_ITEMS.ALL];
            }

            return [...withoutAll, id];
        });
    };

    return (
        <ul className='flex flex-col gap-2'>
            {SHOP_PRICES.map((item) => (
                <li key={item.id}>
                    <button
                        onClick={() => togglePriceRange(item.id)}
                        className='w-full max-w-[254px] flex items-center justify-between'
                    >
                        <span className='text-n4100 caption-1-semi capitalize'>{item.label}</span>
                        <Checkbox
                            checked={values.includes(item.id)}
                            onToggle={() => togglePriceRange(item.id)}
                        />
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default PriceRangesList;