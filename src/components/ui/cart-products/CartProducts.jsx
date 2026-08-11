import { CartProductCompact } from '@ui';
import { CART_PRODUCTS } from '@data';

const CartProducts = ({
    variant,
    ItemComponent = CartProductCompact,
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
            {CART_PRODUCTS.map((product) => (
                <ItemComponent
                    key={`${product.id}-${product.color}`}
                    product={product}
                    liClassName={SPACING_VARIANTS[variant]?.li}
                />
            ))}
        </ul>
    );
};

export default CartProducts;