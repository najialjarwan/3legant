import { PageHeader } from '@ui';
import { ShopLayout } from '@shop';

const ShopPage = () => {
    return (
        <>
            <PageHeader
                title="shop page"
                openedPage="Shop"
                pageDescription="Let’s design the place you always imagined."
                bgImg="src/assets/images/shop-hero-image.png"
            />
            <ShopLayout />
        </>
    )
}

export default ShopPage;