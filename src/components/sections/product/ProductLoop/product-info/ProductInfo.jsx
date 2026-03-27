import Section from './Section';
import ProductSummary from './ProductSummary';
import ProductOfferCountdown from './ProductOfferCountdown';
import ProductOptions from './ProductOptions';
import ProductActions from './ProductActions';
import ProductMeta from './ProductMeta';
import ProductTabs from '../../ProductTabs/ProductTabs';

const ProductInfo = ({ layout }) => {
    return (
        <div
            className={`
            @container 
            w-full max-w-[508px] pt-4 2xl:pt-0
            flex flex-col ${layout.showTabsInline ? 'gap-4' : 'gap-6'}`}
        >
            <Section divider={layout.divider}>
                <ProductSummary />
            </Section>

            {(layout.showOfferCountdown) && (
                <Section divider>
                    <ProductOfferCountdown />
                </Section>
            )}

            <Section>
                <ProductOptions />
            </Section>

            <Section
                className={`
                ${layout.divider ? 'pt-6 gap-6 2xl:pt-8 gap-8' : 'py-6'}`}
                divider={layout.divider}>
                <ProductActions />
            </Section>

            <Section>
                <ProductMeta />
            </Section>

            {layout.showTabsInline && (
                <Section
                    className={`w-full pb-20 @sm:py-2 @sm:h-[352px] @sm:overflow-y-auto`}
                >
                    <ProductTabs variant='inline' layout={layout} />
                </Section>
            )}

        </div>
    )
}

export default ProductInfo;
