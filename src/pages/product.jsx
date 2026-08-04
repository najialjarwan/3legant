import { SHOP_CATEGORIES_ITEMS } from '@constants';
import { Breadcrumbs } from '@ui';
import { ProductLayout } from '@product';

const ProductPage = () => {

    return (
        <>
            <Breadcrumbs
                items={[
                    { label: "home", href: '/' },
                    { label: 'shop', href: '/shop' },
                    {
                        label: 'living room',
                        href: '/shop',
                        state: { category: SHOP_CATEGORIES_ITEMS.LIVING_ROOM },
                    },
                    { label: 'Product' }
                ]}
                className='px-8 2xl:px-40 py-4 gap-2 2xl:gap-4'
            />

            <ProductLayout />
        </>
    );
}

export default ProductPage;