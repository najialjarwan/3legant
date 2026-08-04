import { Link } from 'react-router-dom';
import { Icon } from '@ui';

const Breadcrumbs = ({ items, className = 'gap-4' }) => {
    const labelClass =
        items.length >= 4
            ? 'text-[12px]/[20px] font-inter font-medium 2xl:btn-xs'
            : 'btn-xs';

    return (
        <nav aria-label="Breadcrumb">
            <ol className={`flex items-center ${className}`}>
                {items.map((item) => (
                    <li key={item.label}>
                        {item.href ? (
                            <Link
                                to={item.href}
                                state={item.state}
                                className="flex items-center gap-1 text-black-600"
                            >
                                <span className={`capitalize ${labelClass}`}>
                                    {item.label}
                                </span>
                                <Icon
                                    name="ChevronRight"
                                    spanClassName="size-3"
                                    iconClassName="w-[5px] h-[8px]"
                                />
                            </Link>
                        ) : (
                            <span className={`block text-black-900 btn-xs ${labelClass}`}>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;