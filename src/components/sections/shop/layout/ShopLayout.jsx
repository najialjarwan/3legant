import { useState } from 'react';
import { useBreakpoint } from '@hooks';
import { Icon } from '@ui';
import { GRID_MODES } from '@constants'
import { ProductsGrid } from '@shop';
import { Toolbar } from '@shop/toolbar';
import { FilterItems } from '@shop/filters';

export const ShopLayout = () => {
    const { isMobile } = useBreakpoint();
    const [activeSelector, setActiveSelector] = useState(isMobile ? GRID_MODES.GRID_4X2 : GRID_MODES.GRID_3X3);

    const activeSelector3x3 = activeSelector === GRID_MODES.GRID_3X3;

    return (
        <section
            className={`
            @container
            pb-20 2xl:pb-25 2xl:px-40 2xl:pt-15
            ${activeSelector3x3 ? 'flex flex-row gap-6' : ''}`}
        >
            {activeSelector3x3 && (
                <div
                    className='flex flex-col gap-8'
                >
                    <header className='flex items-center gap-2'>
                        <Icon
                            name='Filter'
                            spanClassName='size-6'
                            iconClassName='w-[18px] h-[16px] text-n7100'
                        />

                        <p className='text-black-900 body-1-semi'>Filter</p>
                    </header>

                    <FilterItems activeSelector3x3={activeSelector3x3} />
                </div>
            )}

            <div
                className={`
                flex flex-col
                ${isMobile && activeSelector === GRID_MODES.GRID_4X1 ? 'gap-10' : 'gap-8 2xl:gap-10'}`}>
                <div
                    className={`
                    p-8 2xl:p-0
                    flex flex-col @sm:flex-row
                    ${activeSelector3x3 ? '2xl:items-start' : 'items-end'}
                    2xl:justify-between gap-8 2xl:gap-0`}
                >
                    <Toolbar
                        activeSelector={activeSelector}
                        activeSelector3x3={activeSelector3x3}
                        onClick={(selector) => setActiveSelector(selector)}
                    />
                </div>

                <ProductsGrid activeSelector={activeSelector} isMobile={isMobile} />
            </div>
        </section>
    )
}

export default ShopLayout;