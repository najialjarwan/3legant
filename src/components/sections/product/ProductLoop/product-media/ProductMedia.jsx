import ProductDesktopGrid from './ProductDesktopGrid';
import { MediaCarousel } from '@ui';

const PRODUCT_IMAGES = [
    "src/assets/images/product image 1 black.png",
    "src/assets/images/product image 1.1.png",
    "src/assets/images/product image 1.2.png",
    "src/assets/images/product image 1.3.png",
    "src/assets/images/product image 1.4.png",
    "src/assets/images/product image 1.5.png",
]

const ProductMedia = ({ layout }) => {
    const carouselConfig = {
        showBadges: true,
        showThumbs: !layout.isMobile,
    };

    if (layout.useDesktopMedia)
        return <ProductDesktopGrid images={PRODUCT_IMAGES} />
    //TODO: Ask about when a constant should live inside the function and when outside.

    return (
        <MediaCarousel
            images={PRODUCT_IMAGES}
            variant='productImages'
            config={carouselConfig}
        />
    );
};

export default ProductMedia;

