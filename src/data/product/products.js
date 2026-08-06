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
                comment: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
            },
            {
                userName: 'Nicola Jensen',
                rating: 5,
                comment: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
            },
            {
                userName: 'Ashley Lee',
                rating: 4,
                comment: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
            },
            {
                userName: 'Jessica Joe',
                rating: 1,
                comment: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
            },
            {
                userName: 'Robin James',
                rating: 5,
                comment: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
            },
            {
                userName: 'Sofia Havertz2',
                rating: 5,
                comment: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
            },
            {
                userName: 'Nicola Jensen2',
                rating: 2,
                comment: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
            },
            {
                userName: 'Ashley Lee2',
                rating: 5,
                comment: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
            },
            {
                userName: 'Jessica Joe2',
                rating: 5,
                comment: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
            },
            {
                userName: 'Robin James2',
                rating: 5,
                comment: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
            },
            {
                userName: 'Sofia Havertz3',
                rating: 1,
                comment: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
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