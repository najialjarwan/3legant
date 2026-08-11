import { DefaultCartItem } from '@ui';
import { CART_ITEMS } from '@data';

const CartItems = ({
    variant,
    ItemComponent = DefaultCartItem,
}) => {
    const SPACING_VARIANTS = {
        primary: {
            ul: 'gap-4 2xl:gap-6',
            li: 'py-6',
        },
        secondary: {
            ul: 'gap-6',
            li: 'py-6',
        },
        tertiary: {
            ul: 'gap-6',
            li: 'py-4 2xl:py-6',
        },
    };

    return (
        <ul className={`w-full flex flex-col ${SPACING_VARIANTS[variant]?.ul}`}>
            {CART_ITEMS.map((item) => (
                <ItemComponent
                    key={`${item.id}-${item.color}`}
                    item={item}
                    liClassName={SPACING_VARIANTS[variant]?.li}
                />
            ))}
        </ul>
    );
};

export default CartItems;