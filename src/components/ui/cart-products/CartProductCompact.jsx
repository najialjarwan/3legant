import { Link } from 'react-router-dom';
import { Icon, Stepper } from '@ui';
import { formatPrice } from '@utils';

const CartProductCompact = ({
    item,
    liClassName,
    canRemoveItem = true,
}) => (
    <li
        className={`
            flex items-center gap-4
            border-b border-b-n3100
            ${liClassName}
        `}
    >
        <Link to={`/product/${item.id}`}>
            <div className="w-20 h-24 bg-n2100 shrink-0">
                <img
                    src={item.image}
                    alt={`${item.label} image`}
                    className="size-full object-cover object-center"
                />
            </div>
        </Link>

        <div className="w-full flex justify-between">
            <div className="flex flex-col gap-2">
                <p className="text-n7100 caption-1-semi capitalize">
                    {item.label}
                </p>

                <p className="text-n4100 caption-2 capitalize">
                    Color: {item.color}
                </p>

                <Stepper quantity={item.quantity} />
            </div>

            <div className="flex flex-col items-end gap-2">
                <p className="text-black-900 caption-1-semi">
                    {formatPrice(item.price)}
                </p>

                {canRemoveItem && (
                    <button>
                        <Icon
                            name="Close"
                            spanClassName="size-6"
                            iconClassName="text-n4100"
                        />
                    </button>
                )}
            </div>
        </div>
    </li>
);

export default CartProductCompact;