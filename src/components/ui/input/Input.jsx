const Input = ({ type, placeholder }) => {
    return (
        <div className="w-full flex flex-col justify-start gap-3">
            <header className='hairline-2 uppercase text-n4100'>{placeholder}</header>
            <input
                type={type}
                placeholder={placeholder}
                className='
                    w-full h-10 px-4
                    body-2 text-n4100
                    border border-black-300 rounded-md
                    placeholder:capitalize placeholder:text-n4100 outline-0'
            />
        </div>
    );
};

export default Input;