import { Link } from 'react-router-dom';
import { Icon } from '@ui';

const Breadcrumbs = ({ items }) => (
    <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-4">
            {items.map((item) => (
                <li key={item.label}>
                    {item.href ? (
                        <Link to={item.href} className="flex items-center gap-1 text-black-600">
                            <span className='btn-xs capitalize'>{item.label}</span>
                            <Icon name="ChevronRight" spanClassName="size-3" iconClassName="w-[5px] h-[8px]"/>
                        </Link>
                    ) : (
                        <span className='block text-black-900 btn-xs'>{item.label}</span>
                    )}
                </li>
            ))}
        </ol>
    </nav>
);

export default Breadcrumbs;