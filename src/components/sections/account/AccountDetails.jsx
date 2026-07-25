import { useState } from 'react';
import { GoBackBtn } from '@ui';
import { AccountMenu, AccountSettings } from './index';

const items = {
    ACCOUNT: 0,
    ADDRESS: 1,
    ORDERS: 2,
    WISHLIST: 3,
    LOGOUT: 4,
};

const ITEMS = [
    { id: items.ACCOUNT, label: 'account' },
    { id: items.ADDRESS, label: 'address' },
    { id: items.ORDERS, label: 'orders' },
    { id: items.WISHLIST, label: 'wishlist' },
    { id: items.LOGOUT, label: 'log out' },
];

const AccountDetails = () => {
    const [activeItem, setActiveItem] = useState(items.ACCOUNT);

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
                <AccountMenu ITEMS={ITEMS} activeItem={activeItem} setActiveItem={setActiveItem} />
                {activeItem === items.ACCOUNT && (
                    <AccountSettings />
                )}
            </div>
        </section>
    );
};

export default AccountDetails;