const ShowMoreBtn = ({ disabled = false, onClick, label }) => (
    <button
        disabled={disabled}
        onClick={onClick}
        className={`
        w-fit px-10 py-1.5
        text-n7100 btn-s capitalize
        border border-n7100 rounded-[80px]
        hover:bg-n7100 hover:text-white
        transition-colors duration-300 ease-out
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        `}
    >
        {label}
    </button>
)

export default ShowMoreBtn;