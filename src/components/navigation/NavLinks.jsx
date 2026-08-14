import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '@data';

const NavLinks = ({
  items = NAV_ITEMS,
  exclude = [],
  classNames = {},

}) => {

  const {
    ul = '',
    li = '',
    row = '',
    link = '',
  } = classNames;

  return (
    <ul className={ul}>
      {items
        .filter(item => !exclude.includes(item.label))
        .map(item => (
          <li key={item.label} className={li}>
            <div className={`flex justify-between ${row}`}>
              <Link to={item.link} className={link}>
                {item.label}
              </Link>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default NavLinks;
