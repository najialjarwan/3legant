import { useParams } from 'react-router-dom';
import { useProduct } from '../product-context/ProductContext';
import { useBreakpoint } from '@hooks';
import { computeLayoutFlags } from '@utils';
import { ProductLoop, ProductTabs } from '@product';
import { Breadcrumbs, ProductsCarouselSection } from '@ui';
import { PRODUCTS, SHOP_CATEGORIES } from '@data';

const ProductLayout = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(
    product => product.id === Number(id)
  );

  const { canShowRecommendations } = useProduct();
  const { isMobile } = useBreakpoint();
  const layoutFlags = computeLayoutFlags({ canShowRecommendations, isMobile });

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "home", href: '/' },
          { label: 'shop', href: '/shop' },
          {
            label: SHOP_CATEGORIES[product.categories[0]].label,
            href: '/shop',
            state: { category: product.categories[0] },
          },
          { label: 'Product' }
        ]}
        className='px-8 2xl:px-40 py-4 gap-2 2xl:gap-4'
      />

      <ProductLoop layout={layoutFlags} product={product} />

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
          products={PRODUCTS}
          isMobile={isMobile}
        />
      )}
    </>
  );
};

export default ProductLayout;
