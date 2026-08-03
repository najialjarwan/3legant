import { Icon } from '@ui';
import { SidebarFilterSection, CategoryList, PriceRangesList } from '@shop';

const Sidebar = ({ activeCategory, setActiveCategory, selectedPrices, setSelectedPrices }) => {
    return (
        <aside className='w-full flex flex-col gap-8'>
            <header className='flex items-center gap-2'>
                <Icon
                    name='Filter'
                    spanClassName='size-6'
                    iconClassName='w-[18px] h-[16px] text-n7100'
                />

                <p className='text-black-900 body-1-semi first-letter:uppercase'>filter</p>
            </header>

            <SidebarFilterSection title='categories'>
                <CategoryList
                    value={activeCategory}
                    onChange={setActiveCategory}
                />
            </SidebarFilterSection>
            <SidebarFilterSection title='price'>
                <PriceRangesList
                    values={selectedPrices}
                    onToggle={setSelectedPrices}
                />
            </SidebarFilterSection>

        </aside>
    );
}

export default Sidebar;