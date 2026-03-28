import { GRID_MODES } from '@constants'

const useShopLayout = ({ activeSelector, isMobile }) => {

    const getGridClasses = () => {
        switch (activeSelector) {
            case GRID_MODES.GRID_3X3:
                return 'grid-rows-3 grid-cols-3 gap-6'
            case GRID_MODES.GRID_4X4:
                return 'grid-rows-4 grid-cols-4 gap-6'
            case GRID_MODES.GRID_4X2:
                return 'grid-rows-4 grid-cols-2 gap-x-2 gap-y-4 2xl:gap-6'
            case GRID_MODES.GRID_4X1:
                return 'grid-rows-4 grid-cols-1 gap-6'
            default:
                return 'grid-rows-3 grid-cols-3 gap-6'
        }
    }

    const isVerticalCard =
        activeSelector === GRID_MODES.GRID_3X3 ||
        activeSelector === GRID_MODES.GRID_4X4 ||
        (activeSelector === GRID_MODES.GRID_4X2 && isMobile)

    const isHorizontalCard =
        (activeSelector === GRID_MODES.GRID_4X2 && !isMobile) ||
        activeSelector === GRID_MODES.GRID_4X1

    const cardVariant =
        activeSelector === GRID_MODES.GRID_4X2 ? 'sm' : 'md'

    return {
        gridClasses: getGridClasses(),
        isVerticalCard,
        isHorizontalCard,
        cardVariant,
    }
}

export default useShopLayout;