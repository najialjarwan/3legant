import { Icon } from "@ui";

const GoBackBtn = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="2xl:hidden flex items-center gap-1"
        >
            <Icon name='ChevronLeft' spanClassName='size-3' iconClassName='w-[4px] h-[7px] text-black-600' />
            <span className='text-black-600 btn-sx'>back</span>
        </button>
    )
}

export default GoBackBtn;