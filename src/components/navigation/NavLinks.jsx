import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '@data';

const NavLinks = ({
  onMenuClose,
  items = NAV_ITEMS,
  classNames = {},

}) => {
  const [activeLink, setActiveLink] = useState('Home');
  const handleClick = (label) => {
    onMenuClose;
    setActiveLink(label);
  }
  const {
    ul = '',
    li = '',
    row = '',
    link = '',
  } = classNames;

  return (
    <ul className={ul}>
      {items.map(item => (
        <li key={item.label} className={li}>
          <div className={`flex justify-between ${row}`}>
            <Link
              to={item.link}
              onClick={() => handleClick(item.label)}
              className={`${link} ${activeLink === item.label ? 'text-n7100' : ''}`}
            >
              {item.label}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
