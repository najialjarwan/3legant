import { useState } from 'react';
import { GoBackBtn } from '@ui';
import { AccountMenu, AccountSettings } from './index';

const ACCOUNT_MENU_ITEMS = {
    ACCOUNT: 0,
    ADDRESS: 1,
    ORDERS: 2,
    WISHLIST: 3,
    LOGOUT: 4,
};

const ACCOUNT_MENU = [
    { id: ACCOUNT_MENU_ITEMS.ACCOUNT, label: 'account' },
    { id: ACCOUNT_MENU_ITEMS.ADDRESS, label: 'address' },
    { id: ACCOUNT_MENU_ITEMS.ORDERS, label: 'orders' },
    { id: ACCOUNT_MENU_ITEMS.WISHLIST, label: 'wishlist' },
    { id: ACCOUNT_MENU_ITEMS.LOGOUT, label: 'log out' },
];

const AccountDetails = () => {
    const [activeItem, setActiveItem] = useState(ACCOUNT_MENU_ITEMS.ACCOUNT);

    return (
        <section
            className="
            px-8 2xl:px-40 pb-20 pt-4 2xl:py-20
            flex flex-col gap-10 2xl:gap-20
            "
        >
            <header className="flex flex-col gap-10">
                <GoBackBtn />
                <h4 className='text-black 2xl:h3 capitalize mx-auto'>my account</h4>
            </header>

            <div className='flex flex-col 2xl:flex-row gap-10 2xl:gap-20'>
                <AccountMenu ACCOUNT_MENU={ACCOUNT_MENU} activeItem={activeItem} setActiveItem={setActiveItem} />
                {activeItem === ACCOUNT_MENU_ITEMS.ACCOUNT && (
                    <AccountSettings />
                )}
            </div>
        </section>
    );
};

export default AccountDetails;