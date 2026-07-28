import { Icon } from '@ui';

export const SortButton = () => {
    return (
        <button
            className='
            flex items-center gap-1
            text-black-900 body-2-semi'
        >
            <span className=''>Sort by</span>
            <Icon
                name='ChevronDown'
                spanClassName='size-5'
                iconClassName='w-[12px] h-[7px]'
            />
        </button>
    )
}

export default SortButton;