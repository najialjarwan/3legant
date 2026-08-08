import { SHOP_CATEGORIES_ITEMS } from '@constants';

export const PRODUCTS = [
    {
        id: 1,
        label: 'tray table',
        discountPercentage: 50,
        price: 400,
        measurements: '17 1/2x20 5/8 "',
        SKU: 1117,
        preview: 'Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.',
        description: 'Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.',
        categories: [
            SHOP_CATEGORIES_ITEMS.LIVING_ROOM,
            SHOP_CATEGORIES_ITEMS.BEDROOM
        ],
        additionalInfo: [
            {
                label: 'details',
                value: 'You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.',
            },
            {
                label: 'packaging',
                value: `Width: 20 " Height: 1 ½ " Length: 21 ½ "
                Weight: 7 lb 8 oz
                Package(s): 1`,
            }

        ],
        image: '/products-images/tray-table/product image 1 black.png',
        gallery: [
            "/products-images/tray-table/product image 1 black.png",
            "/products-images/tray-table/product image 1.1.png",
            "/products-images/tray-table/product image 1.2.png",
            "/products-images/tray-table/product image 1.3.png",
            "/products-images/tray-table/product image 1.4.png",
            "/products-images/tray-table/product image 1.5.png",
        ],
        colors: [
            {
                color: 'black',
                image: '/products-images/tray-table/product image 1 black.png'
            },
            {
                color: 'brown',
                image: '/products-images/tray-table/product image 1 brown.png'
            },
            {
                color: 'red',
                image: '/products-images/tray-table/product image 1 red.png'
            },
            {
                color: 'white',
                image: '/products-images/tray-table/product image 1 white.png'
            }
        ],
        reviews: [
            {
                userName: 'Sofia Havertz',
                rating: 3,
                comment: 'Solid product overall. Took me a few weeks to appreciate the build quality, but now I’m convinced it’s worth the price.',
                datePosted: '2026-07-15T10:30:00Z',
            },
            {
                userName: 'Nicola Jensen',
                rating: 5,
                comment: 'Absolutely fantastic! The packaging was neat, delivery was quick, and the product exceeded my expectations.',
                datePosted: '2026-07-28T09:15:00Z',
            },
            {
                userName: 'Ashley Lee',
                rating: 4,
                comment: 'Good value for money. I’ve been using it daily and it hasn’t disappointed me yet.',
                datePosted: '2026-08-01T14:00:00Z',
            },
            {
                userName: 'Jessica Joe',
                rating: 1,
                comment: 'Not impressed. The product didn’t match the description and I had issues with durability after just a few days.',
                datePosted: '2026-07-20T08:45:00Z',
            },
            {
                userName: 'Robin James',
                rating: 5,
                comment: 'This is my second purchase and I’m still amazed. Highly recommend to anyone considering it.',
                datePosted: '2026-07-22T16:10:00Z',
            },
            {
                userName: 'Sofia Havertz2',
                rating: 5,
                comment: 'I’ve tried similar products before, but this one stands out. Sleek design and very reliable.',
                datePosted: '2026-07-25T11:00:00Z',
            },
            {
                userName: 'Nicola Jensen2',
                rating: 2,
                comment: 'It works, but not as well as I hoped. Customer support was responsive though.',
                datePosted: '2026-07-30T19:20:00Z',
            },
            {
                userName: 'Ashley Lee2',
                rating: 5,
                comment: 'Five stars from me. The performance is consistent and I’ve already recommended it to friends.',
                datePosted: '2026-08-02T09:00:00Z',
            },
            {
                userName: 'Jessica Joe2',
                rating: 5,
                comment: 'Exceeded expectations. I was skeptical at first, but after using it for a week, I’m sold.',
                datePosted: '2026-08-03T13:45:00Z',
            },
            {
                userName: 'Robin James2',
                rating: 5,
                comment: 'I rarely leave reviews, but this product deserves praise. Excellent craftsmanship.',
                datePosted: '2026-08-04T07:30:00Z',
            },
            {
                userName: 'Sofia Havertz3',
                rating: 1,
                comment: 'Unfortunately, this didn’t work for me. The setup was confusing and I had to return it.',
                datePosted: '2026-08-05T21:15:00Z',
            },
        ],
    },
    {
        id: 2,
        image: 'src/assets/images/product image 3.png',
        rating: 4,
        label: 'Table Lamp',
        discountPercentage: 50,
        price: 50,
    },
    {
        id: 3,
        image: 'src/assets/images/product image 8.png',
        rating: 3,
        label: 'Beige Table Lamp',
        discountPercentage: 35,
        price: 75,
    },
    {
        id: 4,
        image: 'src/assets/images/product image 9.png',
        rating: 5,
        label: 'Bamboo Basket',
        discountPercentage: 35,
        price: 75,
    },
    {
        id: 5,
        image: 'src/assets/images/product image 6.png',
        rating: 1,
        label: 'Toasted',
        discountPercentage: 50,
        price: 450,
    },
    {
        id: 6,
        image: 'src/assets/images/product image 7.png',
        rating: 5,
        label: 'Loveseat Sofa',
        discountPercentage: 50,
        price: 400,
    },
    {
        id: 7,
        image: 'src/assets/images/product image 3.png',
        rating: 4,
        label: 'Table Lamp',
        discountPercentage: 50,
        price: 50,
    },
    {
        id: 8,
        image: 'src/assets/images/product image 8.png',
        rating: 3,
        label: 'Beige Table Lamp',
        discountPercentage: 35,
        price: 75,
    },
    {
        id: 9,
        image: 'src/assets/images/product image 9.png',
        rating: 5,
        label: 'Bamboo Basket',
        discountPercentage: 35,
        price: 75,
    },
    {
        id: 10,
        image: 'src/assets/images/product image 6.png',
        rating: 1,
        label: 'Toasted',
        discountPercentage: 50,
        price: 450,
    },
]