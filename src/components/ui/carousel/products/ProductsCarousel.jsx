import { useRef } from 'react';
import { ProductCard, ScrollbarNav } from '@ui';

const ProductsCarousel = ({ products, navMode, }) => {
    const trackRef = useRef(null);
    const viewportRef = useRef(null);

    return (
        <>
            <div ref={viewportRef}>
                <ul
                    ref={trackRef}
                    className="
                    h-[392px] 2xl:h-[433px] hide-scrollbar overflow-x-auto
                    flex gap-4 2xl:gap-6"
                >
                    {products.map(product => (
                        <li
                            key={product.id}
                            className="
                            h-full
                            flex flex-col gap-3 group"
                        >
                            <ProductCard
                                product={product}
                                variant='md'
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {navMode === 'scrollbar' && (
                <ScrollbarNav
                    trackRef={trackRef}
                    viewportRef={viewportRef}
                />
            )}
        </>
    );
};

export default ProductsCarousel;
