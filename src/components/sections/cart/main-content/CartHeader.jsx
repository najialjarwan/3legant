import { useBreakpoint } from '@hooks';
import { HEADER_ITEMS } from '@data';
import { CART_STEPS } from '@constants';
import { GoBackBtn } from '@ui';

const STATE_STYLES = {
    current: {
        border: 'border-b-2 border-b-n7100',
        circle: 'bg-n7100 text-n8',
        label: 'text-n7100',
    },
    completed: {
        border: 'border-b-2 border-b-green',
        circle: 'bg-green text-n8',
        label: 'text-green',
    },
    next: {
        border: '',
        circle: 'bg-n5 text-n8',
        label: 'text-n5',
    },
};

const CartHeader = ({ step, setStep }) => {
    const { isMobile } = useBreakpoint();

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
            <GoBackBtn onClick={handleBack} />

            <div className="flex flex-col gap-10 2xl:items-center">
                <h4 className="mx-auto text-brand 2xl:h3">Cart</h4>

                <div className="flex w-max gap-8">
                    {HEADER_ITEMS.map((item) => {
                        const isCurrent = item.id === step;
                        const isCompleted = item.id < step;
                        const isNext = item.id === step + 1;

                        if (isMobile && !isCurrent && !isNext) return null;

                        const state = isCurrent
                            ? 'current'
                            : isCompleted
                                ? 'completed'
                                : 'next';

                        const styles = STATE_STYLES[state];

                        const circle = (
                            <div
                                className={`
                                    size-[42px]
                                    flex items-center justify-center
                                    rounded-full
                                    ${styles.circle}
                                `}
                            >
                                {item.id + 1}
                            </div>
                        );

                        if (isMobile && isNext) {
                            return (
                                <div key={item.id}>
                                    {circle}
                                </div>
                            );
                        }

                        return (
                            <button
                                key={item.id}
                                onClick={() => handleStepClick(item.id)}
                                className={`
                                    w-[256px] pb-6.5
                                    flex items-center gap-[17px]
                                    ${styles.border}
                                `}
                            >
                                {circle}

                                <p className={`body-2-semi ${styles.label}`}>
                                    {item.label}
                                </p>
                            </button>
                        );
                    })}
                </div>
            </div>
        </header>
    );
};

export default CartHeader;