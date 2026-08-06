import { ProductMedia, ProductInfo, } from '@product';

const ProductLoop = ({ layout, product }) => {

    return (
        <section
            className={`
                px-8 2xl:px-40  
                flex flex-col 2xl:flex-row 2xl:justify-between
                ${layout.showRecommendations ? 'mb-20 2xl:mb-10' : ''}
            `}
        >
            <ProductMedia layout={layout} product={product} />

            <ProductInfo layout={layout} product={product} />
        </section>
    );
}

export default ProductLoop;