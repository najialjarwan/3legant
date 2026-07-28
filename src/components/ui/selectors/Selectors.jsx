import { Icon } from '@ui';
import { useBreakpoint } from '@hooks';
import { GRID_MODES } from '@constants';

export const Selectors = ({ activeSelector, onClick }) => {
    const { isMobile } = useBreakpoint();

    const base = [
        { mode: GRID_MODES.GRID_4X2, icon: 'Grid4x2' },
        { mode: GRID_MODES.GRID_4X1, icon: 'Grid4x1' },
    ];

    const items = isMobile
        ? [...base]
        : [
            { mode: GRID_MODES.GRID_3X3, icon: 'Grid3x3' },
            { mode: GRID_MODES.GRID_4X4, icon: 'Grid4x4' },
            ...base,
        ];

    return (
        <div className='flex border border-black-200'>
            {items.map(({ mode, icon }) => (
                <button
                    key={icon}
                    onClick={() => onClick?.(mode)}
                    className={`
                        w-[46px] h-[40px]
                        flex items-center justify-center
                        border border-n3100 transition-colors
                        ${activeSelector === mode ? 'border-black-900 bg-n2100' : ''}`}
                >
                    <Icon
                        name={icon}
                        spanClassName='size-6'
                        iconClassName={`
                            size-[18px]
                            ${activeSelector === mode ? 'text-n7100' : 'text-n4100'}`}
                    />
                </button>
            ))}
        </div>
    );
};

export default Selectors;