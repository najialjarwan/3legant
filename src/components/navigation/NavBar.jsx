import { Link } from 'react-router-dom';
import { CART_PRODUCTS } from '@data';
import { Icon, Brand, ActionBadgeBtn } from '@ui';
import { NavLinks } from '@navigation';

const NavBar = ({ onMenuOpen, onCartOpen }) => {
    const loggedIn = true;
    return (
        <nav
            className="
            w-full py-4 px-8 2xl:px-40
            flex justify-between"
        >
            {/* Brand & Menu */}
            <div
                data-id='brand&menu'
                className='
                flex gap-1'
            >
                <button
                    onClick={onMenuOpen}
                    className="
                    size-6 flex 2xl:hidden items-center justify-center"
                >
                    <Icon name="Menu" />
                </button>

                <Brand className='text-base 2xl:text-2xl' />
            </div>

            {/* Pages Navigation Links */}
            <NavLinks
                exclude={['Blog']}
                classNames={{
                    ul: `
                    w-fit h-fit
                    hidden 2xl:flex items-center gap-10
                    text-n4100 btn-xs font-space-grotesk`,
                    li: `
                    w-fit h-fit`,
                }}
            />

            {/* Action & Accessiblity Buttons */}
            <div
                data-id='navButtons'
                className="
                flex flex-row-reverse items-center gap-4"
            >
                <ActionBadgeBtn
                    onClick={onCartOpen}
                    count={CART_PRODUCTS.length}
                    iconName="ShoppingBag"
                />

                <Link
                    to={loggedIn ? "/account" : "/auth?mode=signin"}
                    className="size-6 flex items-center justify-center"
                    aria-label={loggedIn ? "Account" : "Sign in"}
                >
                    <Icon
                        name="UserCircle"
                        spanClassName="size-6 hidden 2xl:block"
                        iconClassName="text-n7100"
                    />
                </Link>

                <button
                    className="
                    size-6 flex items-center justify-center"
                >
                    <Icon
                        name="Search"
                        className="hidden 2xl:block"
                    />
                </button>
            </div>

        </nav>
    );
}

export default NavBar;