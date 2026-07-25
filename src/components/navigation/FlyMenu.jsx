import { Link } from 'react-router-dom';
import { Icon, Brand, CartWishlistBtn, SocialLinks } from '@ui';
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
            tool: <CartWishlistBtn onClick={onCartOpen} count={2} iconName="ShoppingBag" />,
        },
        {
            label: "Wishlist",
            tool: <CartWishlistBtn count={2} iconName="Heart" />,
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
                        showChevron
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
                        border-b border-n4100 box-border"
                    >

                        {userSavedProducts.map((item, i) => (
                            <div
                                key={i}
                                className="
                                w-full h-8 pb-1.75
                                flex justify-between
                                border-b border-n3100 box-border"
                            >
                                <span>{item.label}</span>
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