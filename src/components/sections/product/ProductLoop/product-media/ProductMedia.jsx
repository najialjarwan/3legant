import ProductDesktopGrid from './ProductDesktopGrid';
import { MediaCarousel } from '@ui';

const ProductMedia = ({ layout, product }) => {
    const carouselConfig = {
        showBadges: true,
        showThumbs: !layout.isMobile,
    };

    if (layout.useDesktopMedia)
        return <ProductDesktopGrid images={product.gallery} />

    return (
        <MediaCarousel
            images={product.gallery}
            variant='productImages'
            config={carouselConfig}
        />
    );
};

export default ProductMedia;

