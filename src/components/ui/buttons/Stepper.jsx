import { Icon } from '@ui';

const Stepper = ({ quantity }) => {
    return (
        <div
            className='
                px-2 py-1.5
                flex items-center gap-3
                border border-n4100 rounded-sm
            '
        >
            <button>
                <Icon
                    name="Minus"
                    spanClassName="size-4"
                    iconClassName="w-[9.33px] text-black-900"
                />
            </button>

            <span className='text-black-900 caption-2-semi'>{quantity}</span>

            <button>
                <Icon
                    name="Add"
                    spanClassName="size-4"
                    iconClassName="size-[10.08px] ext-black-900"
                />
            </button>
        </div>
    )
}

export default Stepper;