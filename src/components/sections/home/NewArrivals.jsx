import { useBreakpoint } from '@hooks';
import { ProductsCarouselSection } from '@ui';
import { PRODUCTS } from '@data';

const NewArrivals = () => {
    const { isMobile } = useBreakpoint();

    return (
        <ProductsCarouselSection
            title={`New\nArrivals`}
            titleVariant="default"
            sectionVariant="default"
            navMode="scrollbar"
            products={PRODUCTS}
            isMobile={isMobile}
        />
    );
}

export default NewArrivals;