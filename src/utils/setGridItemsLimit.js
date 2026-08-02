export const setGridItemsLimit = (gridMode, GRID_MODES) => {
    switch (gridMode) {
        case GRID_MODES.GRID_3X3:
            return 9;
        case GRID_MODES.GRID_4X4:
            return 12;
        case GRID_MODES.GRID_4X2:
            return 6;
        case GRID_MODES.GRID_4X1:
            return 4;
        default:
            return 6;
    }
};