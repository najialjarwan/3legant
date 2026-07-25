const InputsContainer = ({ header, children }) => {
    return (
        <div
            className='
            px-6 py-10
            flex flex-col gap-6 justify-start
            border border-n4100 rounded-sm
            '
        >
            <header className="body-2-semi 2xl:h7 text-black capitalize">{header}</header>
            {children}
        </div>
    );
}

export default InputsContainer;