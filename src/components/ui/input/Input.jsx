const Input = ({ type, required = false, placeholder, caption = '' }) => {
    return (
        <div className="w-full flex flex-col justify-start gap-3">
            <header className='hairline-2 uppercase text-n4100'>{placeholder} {required ? '*' : ''}</header>
            <input
                required={required}
                type={type}
                placeholder={placeholder}
                className='
                    w-full h-10 px-4
                    body-2 text-n4100
                    border border-black-300 rounded-md
                    placeholder:capitalize placeholder:text-n4100 outline-0'
            />
            {caption && (
                <p className="text-n4100 text-xs/5 tracking-normal font-inter italic">
                    {caption}
                </p>
            )}
        </div>
    );
};

export default Input;