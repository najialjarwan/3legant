const DropdownOptions = ({ items, variant, checkBox = false, isOpen }) => {
    const VARIANTS = {
        default: {
            containerClass: `
                ${isOpen ? 'block' : 'hidden'} 2xl:absolute 2xl:-bottom-2 2xl:translate-y-full 2xl:z-20
                p-2 gap-2.5
                bg-white border-[1.5px] border-n2100 rounded-xl shadow-2`,
            buttonClass: `
                w-full p-2 text-n4100 body-2`,
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
                    className={`text-start ${VARIANTS[variant].buttonClass}`}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}

export default DropdownOptions;