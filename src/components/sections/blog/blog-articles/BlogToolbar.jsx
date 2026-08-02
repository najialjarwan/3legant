import { useBreakpoint } from '@hooks';
import { BLOG_MENU } from '@data';
import { Dropdown, ViewSelectors } from '@ui';

const BlogToolbar = ({ activeItem, setActiveItem, gridMode, onClick, }) => {
    const { isMobile } = useBreakpoint();

    if (isMobile) {
        return (
            <div className='p-8'>
                <Dropdown
                    items={BLOG_MENU}
                    value={activeItem}
                    onChange={setActiveItem}
                />
            </div>
        );
    } else {
        return (
            <div className='w-full px-40 pt-6 flex justify-between'>
                <ul className='flex items-center gap-10'>
                    {BLOG_MENU.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => setActiveItem(item.id)}
                            className={`
                            h-fit
                            caption-1-semi capitalize cursor-pointer
                            ${activeItem === item.id
                                    ? 'border-b border-b-black-900 text-black-900'
                                    : 'text-black-500'}
                            `}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
                <ViewSelectors
                    gridMode={gridMode}
                    onClick={onClick}
                />
            </div>
        );
    }
};

export default BlogToolbar;
