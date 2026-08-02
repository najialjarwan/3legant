import { GRID_MODES } from '@constants'

const useShopLayout = ({ gridMode, isMobile }) => {

    const getGridClasses = () => {
        switch (gridMode) {
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
        gridMode === GRID_MODES.GRID_3X3 ||
        gridMode === GRID_MODES.GRID_4X4 ||
        (gridMode === GRID_MODES.GRID_4X2 && isMobile)

    const isHorizontalCard =
        (gridMode === GRID_MODES.GRID_4X2 && !isMobile) ||
        gridMode === GRID_MODES.GRID_4X1

    const cardVariant =
        gridMode === GRID_MODES.GRID_4X2 ? 'sm' : 'md'

    return {
        gridClasses: getGridClasses(),
        isVerticalCard,
        isHorizontalCard,
        cardVariant,
    }
}

export default useShopLayout;