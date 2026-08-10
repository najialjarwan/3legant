import { PageHeader } from '@ui';
import { ShopLayout } from '@shop';

const ShopPage = () => {
    return (
        <>
            <PageHeader
                title="shop page"
                openedPage="Shop"
                pageDescription="Let’s design the place you always imagined."
                bgImg="/images/heros/shop-hero.png"
            />
            <ShopLayout />
        </>
    )
}

export default ShopPage;