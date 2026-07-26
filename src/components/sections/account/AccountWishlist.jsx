import { useBreakpoint } from '@hooks';
import { Icon, AddToCartBtn } from '@ui';
import { formatPrice } from '@utils';

const WISHLIST_PROUDCTS = [
    {
        id: 0,
        name: 'tray table',
        color: 'black',
        price: 19.19,
        image: "src/assets/images/product image 1 black.png",
    },
    {
        id: 1,
        name: 'sofa',
        color: 'beige',
        price: 345,
        image: "src/assets/images/product image 13.png",
    },
    {
        id: 2,
        name: 'bamboo basket',
        color: 'beige',
        price: 80.80,
        image: "src/assets/images/product image 9.png",
    },
    {
        id: 3,
        name: 'pillow',
        color: 'beige',
        price: 80.80,
        image: "src/assets/images/product image 15.png",
    }
];

const AccountWishlist = () => {
    const { isMobile } = useBreakpoint();
    const WISHLIST_LABELS = ["product", "price", "action"];

    return (
        <div className="w-full">
            <header className="mb-10 text-black body-1-semi capitalize">your wishlist</header>

            <div className="w-full 2xl:pr-[72px]">
                <header
                    className="
                    w-full pl-10 2xl:pl-8 pb-2
                    grid grid-cols-[181px_120px_137px] justify-between
                    text-n4100 caption-1 capitalize
                    border-b border-b-n3100
                    "
                >
                    {WISHLIST_LABELS.map((label) => (
                        <span
                            key={label}
                            className={`${label !== "product" ? 'hidden 2xl:inline' : ''}`}
                        >
                            {label}
                        </span>
                    ))}
                </header>

                <ul>
                    {WISHLIST_PROUDCTS.map((product) => (
                        <li
                            key={product.id}
                            className="
                            w-full 2xl:h-30 py-4
                            grid 2xl:grid-cols-[213px_120px_137px] 2xl:justify-between 2xl:items-center gap-y-4
                            border-b border-b-n3100
                            "
                        >
                            <div className="flex items-center gap-4 2xl:gap-2.5">
                                <button className='text-n4100'>
                                    <Icon name="Close" spanClassName="size-6" />
                                </button>
                                <div className='flex items-center gap-4'>
                                    <div className='w-15 h-18 bg-n2100'>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className='size-full object-cover'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 capitalize'>
                                        <span className='text-n7100 caption-1-semi'>{product.name}</span>
                                        <span className='text-n4100 caption-2'>color: {product.color}</span>
                                        {isMobile && (
                                            <span className='text-n7100 caption-1'>
                                                {formatPrice(product.price)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {!isMobile && (
                                <span className='text-n7100 caption-1'>
                                    {formatPrice(product.price)}
                                </span>
                            )}

                            <AddToCartBtn className="w-full 2xl:w-fit px-6 py-1.5 text-white btn-s" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AccountWishlist;