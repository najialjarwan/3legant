import { Icon, Badges, AddToCartBtn, ProductRating } from '@ui';
import { formatPrice, finalPrice } from '@utils';

const ProductCardHorizontal = ({ product }) => {
    const price = formatPrice(finalPrice(product.price, product.discountPercentage));
    return (
        <>
            <div className="relative bg-n2100 w-full 2xl:w-[265px] h-[416px] 2xl:h-[349px]">
                <img
                    src={product.image}
                    alt=""
                    className="size-full object-contain"
                />

                <Badges
                    variant='medium'
                    discountPercentage={product.discountPercentage}
                    containerClass='left-4 top-4'
                />
            </div>

            <div className="
                w-full 2xl:w-[282px] p-0 2xl:p-6 
                flex flex-col items-start gap-4 2xl:gap-6"
                >
                <div className='flex flex-col gap-2 2xl:gap-4'>
                    <ProductRating rating={product.rating} />

                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between gap-1">
                            <p className="text-n7100 body-2-semi">
                                {product.label}
                            </p>

                            <button className="2xl:hidden p-1.5">
                                <Icon
                                    name='Heart'
                                    iconClassName='w-[19px] h-[15px] text-n4100'

                                />
                            </button>
                        </div>

                        <p className='flex items-center gap-3'>
                            <span className='text-n7100 caption-1-semi'>
                                {price}
                            </span>

                            <span className=' 
                                text-n4100 caption-1 line-through
                                opacity-0
                                group-hover:opacity-100
                                transition-opacity duration-300 ease-out'
                            >
                                {formatPrice(product.price)}
                            </span>
                        </p>

                        <p className='w-full 2xl:w-[230px] text-n4100 caption-2 2xl:caption-1'>
                            Super-soft cushion cover in off-white with a tactile pattern that 
                            enhances the different tones in the pile and base.
                        </p>
                    </div>

                    <div className='flex flex-col items-center gap-2'>
                        <AddToCartBtn
                            className='
                            w-full 2xl:w-[230px] h-10 2xl:h-11.5 px-6 py-2 
                            text-n1100 btn-xs 2xl:btn-s
                            rounded-lg'
                        />
                        <button className='
                            py-1 
                            hidden 2xl:flex flex-row items-center gap-1 text-n7100'
                        >
                            <Icon
                                name='Heart'
                                spanClassName='size-5'
                                iconClassName='size-full'
                            />

                            <span className='btn-xs'>Wishlist</span>
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProductCardHorizontal;