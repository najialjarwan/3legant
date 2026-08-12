const PlaceOrderBtn = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="
            w-full px-10 py-3
            text-white btn-s capitalize
            bg-n7100 border border-transparent rounded-lg
            hover:bg-transparent hover:text-n7100 hover:border hover:border-n7100
            transition-all duration-300 ease-in-out"
        >
            place order
        </button>
    );
}

export default PlaceOrderBtn;