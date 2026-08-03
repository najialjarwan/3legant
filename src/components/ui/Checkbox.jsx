import { Icon } from '@ui';

const Checkbox = ({
    checked,
    onChange,
    children,
    className = '',
}) => {
    return (
        <div
            onClick={onChange}
            className={`flex items-center gap-3 cursor-pointer select-none ${className}`}
        >
            <div
                className={`
                size-6 flex items-center justify-center
                border border-n4100 rounded-sm
                ${checked ? 'bg-n7100' : ''}
                `}
            >
                <Icon
                    name="Check"
                    spanClassName={`size-6 ${checked ? 'block' : 'hidden'}`}
                    iconClassName="text-n8"
                />
            </div>
            {children}
        </div>
    );
};

export default Checkbox;
