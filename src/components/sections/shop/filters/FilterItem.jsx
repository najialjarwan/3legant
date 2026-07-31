import { DropdownOptions, Dropdown } from '@ui';

export const FilterItem = ({ type, activeSelector3x3, items, label }) => {
    return (
        <>
            <header className={`${activeSelector3x3 ? 'text-black-900' : 'text-n4100'} body-2-semi`}>
                {type}
            </header >

            {activeSelector3x3 && (
                <DropdownOptions
                    items={items}
                    variant='alt'
                    checkBox
                    isOpen={isOpen}
                />
            )}

            {!activeSelector3x3 && (
                <Dropdown label={label} items={items} variant="default" />
            )}
        </>
    )
}

export default FilterItem;