const AuthFormSubmitBtn = ({ children }) => {
    return (
        <button
            type="submit"
            className='
            py-[10px] px-[40px] 
            text-white btn-s capitalize
            bg-n7100 border border-n7100 rounded-lg
            hover:text-n7100 hover:bg-white hover:border-n7100
            transition-all duration-150 ease-linear
            '
        >
            {children}
        </button>
    );
};

export default AuthFormSubmitBtn;
