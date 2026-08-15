const FormField = ({
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    autoComplete = 'on',
}) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            className="w-full h-10 body-2 text-n4100 border-b border-n3100 outline-0"
        />
    );
};

export default FormField;