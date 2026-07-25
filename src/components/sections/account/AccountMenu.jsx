import { useBreakpoint } from '@hooks';
import { Icon, Dropdown } from '@ui';

const items = [
    "account",
    "address",
    "orders",
    "wishlist",
    "log out",
]

const AccountMenu = () => {
    const { isMobile } = useBreakpoint();
    
    return (
        <div className='px-4 py-10 bg-n2100 rounded-lg'>
            <div className='relative size-[82px] mx-auto rounded-full'>
                <img src="src/assets/images/avatar sofia havertz.png" alt="user profile" />
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
            <p className='w-fit mx-auto mb-10 text-black body-1-semi'>Sofia Havertz</p>
            {isMobile
                ? (<Dropdown label="account" items={items} variant="default" />)
                : (
                    <ul className='flex flex-col gap-3 text-n4100 body-2-semi capitalize'>
                        {items.map((item, i) => (
                            <li
                                key={i}
                                className={`w-[230px] py-2 ${i === 0 ? 'text-n7100 border-b border-n7100' : ''}`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    );
}

export default AccountMenu;