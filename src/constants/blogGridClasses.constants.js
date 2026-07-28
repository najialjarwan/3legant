export const BLOG_GRID_CLASSES = (activeSelector, GRID_MODES) => {
    switch (activeSelector) {
        case GRID_MODES.GRID_3X3:
            return '2xl:grid-cols-3'
        case GRID_MODES.GRID_4X4:
            return '2xl:grid-cols-4'
        case GRID_MODES.GRID_4X2:
            return '2xl:grid-cols-2'
        case GRID_MODES.GRID_4X1:
            return '2xl:grid-cols-1'
        default:
            return '2xl:grid-cols-3'
    }
}