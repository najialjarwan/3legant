import { HEADER_ITEMS } from '@data';
import { CART_STEPS } from '@constants';
import { Icon } from '@ui';

const CartHeader = ({ step, setStep }) => {
    const handleBack = () => {
        if (step > CART_STEPS.CART) {
            setStep(step - 1);
        }
    };

    const handleStepClick = (targetStep) => {
        if (targetStep <= step) {
            setStep(targetStep);
        }
    };

    return (
        <header className="flex flex-col gap-10">
            <button
                onClick={handleBack}
                className="2xl:hidden flex items-center gap-1"
            >
                <Icon name='ChevronLeft' spanClassName='size-3' iconClassName='w-[4px] h-[7px] text-black-600' />
                <span className='text-black-600 btn-sx'>Back</span>
            </button>

            <div className="flex flex-col 2xl:items-center gap-10 overflow-x-hidden">
                <h4 className="text-brand 2xl:h3 mx-auto">Cart</h4>
                <div className="w-max flex gap-8">
                    {HEADER_ITEMS.map((item) => {
                        const isCurrent = item.id === step;
                        const isCompleted = item.id < step;

                        return (
                            <button
                                key={item.id}
                                onClick={() => handleStepClick(item.id)}
                                className={`
                                w-[256px] pb-6.5 
                                flex items-center gap-[17px]
                                ${isCurrent
                                        ? 'border-b-2 border-b-n7100'
                                        : isCompleted
                                            ? 'border-b-2 border-b-green'
                                            : ''}
                                `}
                            >
                                <div className={`
                                    size-[42px]
                                    flex items-center justify-center
                                    rounded-full
                                    ${isCurrent
                                        ? 'bg-n7100 text-n8'
                                        : isCompleted
                                            ? 'bg-green text-n8'
                                            : 'bg-n5 text-n8'}
                                    `}
                                >
                                    {item.id + 1}
                                </div>

                                <p className={`
                                    body-2-semi
                                    ${isCurrent
                                        ? 'text-n7100'
                                        : isCompleted
                                            ? 'text-green'
                                            : 'text-n5'}
                                    `}
                                >
                                    {item.label}
                                </p>
                            </button>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

export default CartHeader;