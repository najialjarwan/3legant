import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '@data';

const NavLinks = ({
  onMenuClose,
  items = NAV_ITEMS,
  highlightActive = false,
  classNames = {},
}) => {
  const { pathname } = useLocation();

  const {
    ul = '',
    li = '',
  } = classNames;

  return (
    <ul className={ul}>
      {items.map(item => {
        const isActive = pathname === item.link;

        return (
          <li
            key={item.label}
            className={`
              flex justify-between
              ${li}
              ${highlightActive && isActive ? 'text-n7100' : ''}
            `}
          >
            <Link
              to={item.link}
              onClick={onMenuClose}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
