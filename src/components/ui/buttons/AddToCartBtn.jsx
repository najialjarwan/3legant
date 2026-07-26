const AddToCartBtn = ({ className = '' }) => {
    return (
        <button
            className={`
            bg-n7100 border border-n7100 rounded-lg shadow-1
            hover:text-n7100 hover:bg-transparent
            transition-all duration-150 ease-linear
            ${className}
            `}
        >
            Add to cart
        </button>
    );
}

export default AddToCartBtn;