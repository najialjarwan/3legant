import { Icon, Stepper } from '@ui';
import { formatPrice } from '@utils';

const CartProductItem = ({ item, liClassName }) => (
    <li
        className={`
            flex items-center gap-4
            border-b border-b-n3100
            ${liClassName}
        `}
    >
        <div className="w-20 h-24 bg-n2100 shrink-0">
            <img
                src={item.image}
                alt={`${item.name} image`}
                className="size-full object-cover object-center"
            />
        </div>

        <div className="flex flex-col gap-2">
            <p className="text-n7100 caption-1-semi">
                {item.name}
            </p>

            <p className="text-n4100 caption-2">
                Color: {item.color}
            </p>

            <button className="flex items-center gap-1 text-n4100">
                <Icon name="Close" spanClassName="size-6" />
                <span className="caption-1-semi">
                    Remove
                </span>
            </button>
        </div>

        <div
            className="
                ml-auto
                w-[328px]
                flex justify-between
                text-black-900
                text-lg/7.5
                font-inter
            "
        >
            <Stepper quantity={item.quantity} />

            <p className="font-normal">
                {formatPrice(item.price)}
            </p>

            <p className="font-semibold">
                {formatPrice(item.price * item.quantity)}
            </p>
        </div>
    </li>
);

export default CartProductItem;