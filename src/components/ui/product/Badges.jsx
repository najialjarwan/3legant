const Badges = ({
    variant = 'medium',
    discountPercentage,
    containerClass = '',
    isNew = false,
}) => {
    const VARIANTS = {
        medium: {
            base: 'size-fit px-3.5 py-1 hairline-1',
            new: 'text-n7100',
            percent: 'text-n1100',
        },
        large: {
            base: '2xl:size-fit px-4.5 py-2',
            new: `
            w-[74px] h-[32px] 
            text-black-900 body-2-semi 2xl:badges `,
            percent: `
            w-[78px] h-[32px]
            text-n1100 badges`
        },
    }
    return (
        <div
            className={`
            absolute flex flex-col gap-2 2xl:gap-2.25
            ${containerClass}`}
        >
            {isNew && (
                <div
                    className={`
                    flex items-center justify-center 
                    bg-white rounded-sm 
                    ${VARIANTS[variant].base}
                    ${VARIANTS[variant].new}
                    `}
                >
                    <span>NEW</span>
                </div>
            )}

            {discountPercentage && (
                <div
                    className={`
                    flex items-center justify-center 
                    bg-green rounded-sm
                    ${VARIANTS[variant].base}
                    ${VARIANTS[variant].percent}`}
                >
                    <span>-{discountPercentage}%</span>
                </div>
            )}
        </div>
    );
}

export default Badges;