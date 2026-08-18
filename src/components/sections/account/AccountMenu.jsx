import { useNavigate } from 'react-router-dom';
import { useAuth } from '@contexts';
import { useBreakpoint } from '@hooks';
import { Icon, Dropdown } from '@ui';
import { ACCOUNT_MENU_ITEMS } from '@constants';
import { ACCOUNT_MENU } from '@data';

const AccountMenu = ({ activeItem, setActiveItem }) => {
    const { isMobile } = useBreakpoint();
    const { currentUser, signOut } = useAuth();
    const navigate = useNavigate();

    const handleItemClick = (itemId) => {
        if (itemId === ACCOUNT_MENU_ITEMS.LOGOUT) {
            signOut();
            navigate('/auth?mode=signin')
            return;
        }

        setActiveItem(itemId);
    };

    return (
        <div className='h-fit px-4 py-10 bg-n2100 rounded-lg'>
            <div className='relative size-[82px] mx-auto rounded-full'>
                <img src={currentUser.avatar} alt="user profile" />
                <div
                    className='
                    absolute bottom-0 right-0
                    size-7
                    flex items-center justify-center
                    bg-n7100 border-[1.5px] border-white rounded-[125px]
                    '
                >
                    <Icon name="Camera" spanClassName="size-4 text-n1100" iconClassName="w-[13.33px] h-[12px]" />
                </div>
            </div>
            <p className='w-fit mx-auto mb-10 text-black body-1-semi'>
                {currentUser.name || currentUser.username}
            </p>
            {isMobile
                ? (
                    <Dropdown
                        items={ACCOUNT_MENU}
                        value={activeItem}
                        onChange={handleItemClick}
                    />)
                : (
                    <ul className='flex flex-col gap-3 text-n4100 body-2-semi capitalize'>
                        {ACCOUNT_MENU.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => handleItemClick(item.id)}
                                className={`
                                w-[230px] py-2
                                cursor-pointer border-b
                                ${activeItem === item.id ? 'text-n7100 border-b-n7100' : 'border-b-transparent'}
                                `}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
}

export default AccountMenu;