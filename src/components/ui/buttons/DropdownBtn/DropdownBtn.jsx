import { Icon } from '@ui';

const DropdownBtn = ({ onClick, label }) => {
    return (
        <button
            onClick={onClick}
            className='
            w-full p-2 pl-4
            flex items-center justify-between
            bg-white border-2 border-n4100 rounded-lg
            '
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
    )
}

export default DropdownBtn;