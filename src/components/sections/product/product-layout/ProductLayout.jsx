import { useProduct } from '../product-context/ProductContext';
import { useBreakpoint } from '@hooks';
import { computeLayoutFlags } from '@utils';
import { ProductBreadcrumbs, ProductLoop, ProductTabs } from '@product';
import { ProductsCarouselSection } from '@ui';
import { HOME_NEW_ARRIVALS } from '@data';

const ProductLayout = () => {
  const { canShowRecommendations } = useProduct();
  const { isMobile } = useBreakpoint();

  // 🔒 CENTRALIZED LAYOUT FLAGS
  const layoutFlags = computeLayoutFlags({ canShowRecommendations, isMobile });

  return (
    <>
      <ProductBreadcrumbs />

      <ProductLoop layout={layoutFlags} />

      {layoutFlags.showTabsSection && (
        <section className="@container px-40 py-10">
          <ProductTabs variant='section' layout={layoutFlags} />
        </section>
      )}

      {layoutFlags.showRecommendations && (
        <ProductsCarouselSection
          title="You might also like"
          titleVariant="alt"
          sectionVariant="alt"
          navMode="scrollbar"
          products={HOME_NEW_ARRIVALS}
          isMobile={isMobile}
        />
      )}
    </>
  );
};

export default ProductLayout;
