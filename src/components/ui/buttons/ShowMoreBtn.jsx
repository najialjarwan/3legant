const ShowMoreBtn = ({ onClick, label }) => (
    <button
        onClick={onClick}
        className="
        px-10 py-1.5
        text-n7100 btn-s capitalize
        border border-n7100 rounded-[80px]
        hover:bg-n7100 hover:text-white
        transition-colors duration-300 ease-out"
    >
        {label}
    </button>
)

export default ShowMoreBtn;