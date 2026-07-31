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
                w-full p-2 body-2-semi capitalize rounded-lg`,
        },
        alt: {
            containerClass: `gap-3`,
            buttonClass: `text-black-500 caption-1-semi`,
        }
    }
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
                    text-start ${VARIANTS[variant].buttonClass}
                    ${activeItem === item.id ? 'text-n7100 bg-n2100' : 'text-n4100 bg-transparent'}
                    `}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}

export default DropdownOptions;