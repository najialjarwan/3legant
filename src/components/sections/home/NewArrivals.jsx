import { useBreakpoint } from '@hooks';
import { ProductsCarouselSection } from '@ui';
import { PRODUCTS_ARRAY } from '@data';

const NewArrivals = () => {
    const { isMobile } = useBreakpoint();
    const newProducts = PRODUCTS_ARRAY.filter(a => a.isNew);

    return (
        <ProductsCarouselSection
            title={`New\nArrivals`}
            titleVariant="default"
            sectionVariant="default"
            navMode="scrollbar"
            products={newProducts}
            isMobile={isMobile}
        />
    );
}

export default NewArrivals;