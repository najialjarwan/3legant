import { useState } from 'react';
import { DropdownBtn, DropdownOptions } from '@ui';

const Dropdown = ({items, label, variant}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <div className='relative w-full 2xl:w-[262px] flex flex-col gap-2'>
            <DropdownBtn items={items} onClick={handleClick} label={label} />

            <DropdownOptions items={items} variant={variant} isOpen={isOpen} />
        </div>
    );
}

export default Dropdown;