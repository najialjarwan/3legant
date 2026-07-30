import { ProductsCarousel, ProductsCarouselHeader, MoreActionBtn } from '@ui';

const ProductsCarouselSection = ({
    title,
    titleVariant,
    sectionVariant,
    navMode,
    products,
    isMobile,
}) => {

    const VARIANTS = {
        default: 'pl-8 py-8 2xl:pb-0 2xl:pt-12 2xl:pr-0 2xl:pl-40',
        alt: 'pl-8 pb-20 pt-8 2xl:pl-40 2xl:pt-10',
    };

    const showHeaderAction = navMode === 'scrollbar' && !isMobile;

    return (
        <section
            data-title={title}
            className={`
            relative
            w-full ${VARIANTS[sectionVariant]}
            flex flex-col gap-10 2xl:gap-12`}
        >
            <ProductsCarouselHeader
                title={title}
                titleVariant={titleVariant}
                action={
                    showHeaderAction
                        ? <MoreActionBtn
                            label='More Products'
                            labelClass='btn-xs 2xl:btn-s text-n7100' />
                        : null
                }
            />

            <ProductsCarousel
                products={products}
                navMode={navMode}
            />

            {isMobile && navMode === 'scrollbar' && (
                <MoreActionBtn
                    label='More Products'
                    labelClass='btn-xs 2xl:btn-s text-n7100'
                />
            )}
        </section>
    );
};

export default ProductsCarouselSection;
