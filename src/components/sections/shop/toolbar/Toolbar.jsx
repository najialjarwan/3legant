import { FilterItems } from '@shop/filters';
import { ViewSelectors } from '@ui';

export const Toolbar = ({ activeSelector, activeSelector3x3, onClick }) => {
    return (
        <>
            {activeSelector3x3 && (
                <p className='text-n7100 body-1-semi'>Living Room</p>
            )}

            {!activeSelector3x3 && (
                <div className='w-full 2xl:w-fit flex flex-col 2xl:flex-row gap-6'>
                    <FilterItems activeSelector3x3={activeSelector3x3} />
                </div>
            )}

            <div
                className='w-full 2xl:w-auto py-2 2xl:py-0 flex items-center justify-between gap-8'
            >
                <ViewSelectors
                    activeSelector={activeSelector}
                    onClick={onClick}
                />
            </div>
        </>
    )
}

export default Toolbar;