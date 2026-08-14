import { Link } from 'react-router-dom';
import { ACCOUNT_MENU_ITEMS } from '@constants';
import { CART_PRODUCTS, ACCOUNT_WISHLIST_PRODUCTS } from '@data';
import { Icon, Brand, ActionBadgeBtn, SocialLinks } from '@ui';
import { NavLinks } from '@navigation';

export const asideClass = `
    fixed top-0
    w-[343px] h-screen p-6 overflow-y-auto
    transform transition-transform duration-100 ease-out
    bg-white`;

const FlyMenu = ({ isOpen, onClose, onCartOpen }) => {
    const loggedIn = true;

    const userSavedProducts = [
        {
            label: "Cart",
            tool: (
                <ActionBadgeBtn
                    onClick={onCartOpen}
                    count={CART_PRODUCTS.length}
                    iconName="ShoppingBag"
                />
            ),
        },
        {
            label: "Wishlist",
            tool: (
                <ActionBadgeBtn
                    to="/account"
                    state={{ activeTab: ACCOUNT_MENU_ITEMS.WISHLIST }}
                    onClick={onClose}
                    count={ACCOUNT_WISHLIST_PRODUCTS.length}
                    iconName="Heart"
                />
            ),
        }
    ]

    return (
        <aside
            data-id='Fly Menu'
            className={`
            ${asideClass}
            left-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}
        >
            <div
                className={`
                pb-30
                flex 2xl:hidden flex-col justify-between gap-61`}
            >
                {/* Top Container: Branding & Accessibility*/}
                <div
                    data-id='branding&accessibility'
                    className="
                    w-full
                    flex flex-col gap-4"
                >
                    {/* Brand & Close Menu Button */}
                    <div
                        className="
                        w-full
                        flex justify-between"
                    >
                        <Brand className='text-base 2xl:text-2xl' />

                        <button
                            onClick={onClose}
                            className=""
                        >
                            <Icon
                                name="Close"
                                className="size-6 2xl:size-5"
                            />
                        </button>
                    </div>

                    {/* Search Product Input */}
                    <form
                        className="
                        w-full h-11.5 px-4 rounded-[6px]
                        border border-n4100
                        flex items-center"
                    >
                        <div
                            type="text"
                            className="
                            w-full
                            flex gap-2"
                        >
                            <span className='size-6'>
                                <Icon name="Search" />
                            </span>
                            <input
                                type="text"
                                id="searchPrduct"
                                name="search"
                                placeholder='Search'
                                className='
                                w-full
                                text-n4100 caption-1
                                outline-0'
                            />
                        </div>
                    </form>

                    {/* Pages Navigation Links */}
                    <NavLinks
                        onMenuClose={onClose}
                        exclude={['Blog']}
                        classNames={{
                            ul: `
                            w-full
                            flex flex-col gap-4
                            btn-xs text-n7100`,
                            li: `
                            w-full pb-1.75
                            border-b border-n3100 box-border`,
                            row: `w-full h-8`,
                            link: `w-full`,
                        }}
                    />
                </div>

                {/* Bottom Container: Account Actions & Social Links */}
                <div
                    className="
                    w-full h-52.5
                    flex flex-col justify-between"
                >
                    {/* Cart & wishlist */}
                    <div
                        className="
                        w-full
                        flex flex-col gap-2
                        text-n4100
                        "
                    >
                        {userSavedProducts.map((item, i) => (
                            <div
                                key={i}
                                className="
                                w-full pb-2
                                flex justify-between
                                border-b border-n3100 box-border"
                            >
                                <span className='btn-m'>{item.label}</span>
                                {item.tool}
                            </div>
                        ))}
                    </div>

                    {/* Sign In */}
                    <Link
                        to={loggedIn ? '/account' : '/auth?mode=signin'}
                        className="
                        w-full py-2.5 px-6.5 rounded-md
                        flex items-center justify-center
                        bg-n7100
                        btn-m text-white"
                    >
                        Sign In
                    </Link>

                    {/* Social Media Links */}
                    <div className="w-full">
                        <SocialLinks color='dark' />
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default FlyMenu;