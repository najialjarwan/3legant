import { Link } from 'react-router-dom';
import { Icon } from '@ui';

const MoreActionBtn = ({
    label,
    buttonClass = '',
    labelClass = '',
    iconSpanClass = '',
    iconClass = '',
    directTo = '',
}) => {
    return (
        <Link
            to={directTo}
            className={`
            w-fit
            flex items-center gap-1
            shadow-line shadow-n7100
            ${buttonClass}`}
        >
            <span className={`btn-xs 2xl:btn-s capitalize ${labelClass}`}>
                {label}
            </span>

            <Icon
                name="ArrowRight"
                spanClassName={`size-4 2xl:size-5 ${iconSpanClass}`}
                iconClassName={`w-[9.33px] h-[8px] 2xl:w-[11.67px] h-[10px] ${iconClass}`}
            />
        </Link>
    );
};

export default MoreActionBtn;
