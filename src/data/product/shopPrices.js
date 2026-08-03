import { SHOP_PRICES_ITEMS } from "@constants";

export const SHOP_PRICES = [
    { id: SHOP_PRICES_ITEMS.ALL, label: 'all price', min: 0, max: Infinity },
    { id: SHOP_PRICES_ITEMS.UNDER100, label: '$0.00 - 99.99', min: 0, max: 99.99 },
    { id: SHOP_PRICES_ITEMS.UNDER200, label: '$100.00 - 199.99', min: 100, max: 199.99 },
    { id: SHOP_PRICES_ITEMS.UNDER300, label: '$200.00 - 299.99', min: 200, max: 299.99 },
    { id: SHOP_PRICES_ITEMS.UNDER400, label: '$300.00 - 399.99', min: 300, max: 399.99 },
    { id: SHOP_PRICES_ITEMS.ABOVE400, label: '$400.00+', min: 400, max: Infinity },
]