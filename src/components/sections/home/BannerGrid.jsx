import { SHOP_CATEGORIES_ITEMS } from '@constants';
import { SHOP_CATEGORIES } from '@data';
import { MoreActionBtn } from '@ui';

const BANNER_ITEMS = [
    {
        image: 'src/assets/images/product image 4.png',
        category: SHOP_CATEGORIES_ITEMS.LIVING_ROOM,
        variant: 'tall',
    },
    {
        image: 'src/assets/images/product image 5.png',
        category: SHOP_CATEGORIES_ITEMS.BEDROOM,
        variant: 'rightFloat',
    },
    {
        image: 'src/assets/images/product image 6.png',
        category: SHOP_CATEGORIES_ITEMS.KITCHEN,
        variant: 'leftFloat',
    },
];

const variants = {
    tall: {
        container: 'h-[377px] 2xl:h-[664px] row-span-2',
        image: 'static size-full',
        label: 'left-8 top-8 2xl:left-12 2xl:top-12',
    },
    rightFloat: {
        container: 'h-[180px] 2xl:h-[320px]',
        image: 'absolute h-[180px] 2xl:h-[360px] -right-[20px] 2xl:-right-[30px] 2xl:-top-[30px]',
        label: 'left-8 bottom-8 2xl:bottom-10',
    },
    leftFloat: {
        container: 'h-[180px] 2xl:h-[320px]',
        image: 'absolute h-[120px] 2xl:h-[220px] right-[10px] 2xl:right-[30px] top-[40px] 2xl:top-[60px]',
        label: 'left-8 bottom-8 2xl:bottom-10',
    },
};

const BannerGrid = () => {
    return (
        <section
            data-title='Categories Banner'
            className="
            w-full
            px-8 2xl:px-40
            grid grid-cols-1
            2xl:grid-cols-2
            grid-rows-4 2xl:grid-rows-2
            gap-4 2xl:gap-6"
        >
            {BANNER_ITEMS.map((item, i) => {
                const v = variants[item.variant];
                return (
                    <div
                        key={i}
                        data-id={item.category}
                        className={`
                        relative ${v.container} bg-n2100`}
                    >
                        {/* Product Category Image */}
                        <img
                            src={item.image}
                            alt={`${item.category} image`}
                            className={`
                            ${v.image} object-contain object-bottom`}
                        />

                        {/* Category & Shop*/}
                        <div
                            className={`
                            absolute
                            ${v.label}
                            flex flex-col gap-2
                            text-n7100`}
                        >
                            <h6 className="2xl:h5 capitalize">{SHOP_CATEGORIES[item.category].label}</h6>

                            <MoreActionBtn
                                label='Shop Now'
                                labelClass='btn-xs 2xl:btn-s text-n7100'
                                directTo="shop"
                                state={{ category: item.category }}
                            />
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default BannerGrid;
