import { Link } from 'react-router-dom';
import { Icon } from '@ui';

const Breadcrumbs = ({ items }) => (
    <nav aria-label="Breadcrumb">
        <ol className="flex gap-4">
            {items.map((item) => (
                <li key={item.label}>
                    {item.href ? (
                        <Link to={item.href} className="flex items-center gap-1 text-black-600">
                            <span className='btn-xs capitalize'>{item.label}</span>
                            <Icon name="ChevronRight" spanClassName="size-3" iconClassName="w-[4px] h-[7px]"/>
                        </Link>
                    ) : (
                        <span className='text-black-900 btn-xs first-letter:capitalize'>{item.label}</span>
                    )}
                </li>
            ))}
        </ol>
    </nav>
);

export default Breadcrumbs;