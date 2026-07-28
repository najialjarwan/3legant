import { SortButton, Selectors } from '@ui';

export const ViewSelectors = ({ activeSelector, onClick }) => {
    return (
        <div
            className='w-full 2xl:w-auto py-2 2xl:py-0 flex items-center justify-between gap-8'
        >
            <SortButton />
            <Selectors activeSelector={activeSelector} onClick={onClick} />
        </div>
    )
};

export default ViewSelectors;
