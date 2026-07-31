const DropdownOptions = ({
    items,
    variant,
    checkBox = false,
    isOpen,
    handleClick = () => {},
    activeItem,
    setActiveItem,
}) => {
    const VARIANTS = {
        default: {
            containerClass: `
                ${isOpen ? 'block' : 'hidden'} 2xl:absolute 2xl:-bottom-2 2xl:translate-y-full 2xl:z-20
                p-2 gap-2.5
                bg-white border-[1.5px] border-n2100 rounded-xl shadow-2`,
            buttonClass: `
                w-full p-2 text-n4100 body-2-semi rounded-lg`,
        },
        alt: {
            containerClass: `gap-3`,
            buttonClass: `text-black-500 caption-1-semi`,
        }
    };

    return (
        <div className={`2xl:w-[262px] flex flex-col ${VARIANTS[variant].containerClass}`}>
            {items.map((item) => (
                <button
                    key={item.id}
                    onClick={() => {
                        setActiveItem(item.id);
                        handleClick();
                    }}
                    className={`
                    w-fit
                    text-start capitalize
                    ${VARIANTS[variant].buttonClass}
                    ${activeItem === item.id && variant === "default"
                            ? 'text-n7100 bg-n2100'
                            : activeItem === item.id && variant === "alt"
                                ? 'text-black-900 border-b border-b-black-900'
                                : ''}
                    `}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}

export default DropdownOptions;