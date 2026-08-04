import { useState } from 'react';
import { Icon } from '@ui';

const Dropdown = ({ items, value, onChange, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => { setIsOpen(prev => !prev) };

    const handleSelect = (id) => {
        onChange(id);
        setIsOpen(false);
    };

    return (
        <div className={`relative w-full 2xl:w-[262px] flex flex-col gap-2`}>
            <DropdownBtn
                onClick={handleClick}
                label={items[value].label}
                className={className}
            />

            <DropdownOptions
                items={items}
                isOpen={isOpen}
                value={value}
                onSelect={handleSelect}
                className={className}
            />
        </div>
    );
}

export default Dropdown;

const DropdownBtn = ({ onClick, label, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`
            w-full p-2 pl-4
            flex items-center justify-between
            bg-white border-2 border-n4100 rounded-lg
            ${className}
            `}
        >
            <p className='text-n7100 body-2-semi capitalize'>{label}</p>
            <span className='p-1'>
                <Icon
                    name="ArrowDownSimple"
                    spanClassName="p-1 size-6"
                    iconClassName="w-[9px] h-[6px] text-n4100"
                />
            </span>
        </button>
    );
}

const DropdownOptions = ({
    items,
    isOpen,
    value,
    onSelect,
    className = ''
}) => {

    return (
        <ul
            className={`
            2xl:absolute 2xl:-bottom-2 2xl:translate-y-full 2xl:z-20
            2xl:w-[262px] p-2
            flex flex-col gap-2.5
            bg-white border-[1.5px] border-n2100 rounded-xl shadow-2
            ${isOpen ? 'block' : 'hidden'}
            ${className}
            `}
        >
            {items.map((item) => (
                <li key={item.id}>
                    <button
                        onClick={() => onSelect(item.id)}
                        className={`
                        w-fit
                        flex items-center justify-between
                        text-start capitalize
                        w-full p-2 text-n4100 body-2-semi rounded-lg
                        ${value === item.id ? 'text-n7100 bg-n2100' : ''}
                        `}
                    >
                        {item.label}
                    </button>
                </li>
            ))}
        </ul>
    );
}