import { useState } from 'react';
import { DropdownBtn, DropdownOptions } from '@ui';

const Dropdown = ({ listItems, variant, activeItem, setActiveItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => { setIsOpen(prev => !prev) };

    return (
        <div className='relative w-full 2xl:w-[262px] flex flex-col gap-2'>
            <DropdownBtn
                onClick={handleClick}
                label={listItems[activeItem].label}
            />

            <DropdownOptions
                items={listItems}
                variant={variant}
                isOpen={isOpen}
                handleClick={handleClick}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
        </div>
    );
}

export default Dropdown;