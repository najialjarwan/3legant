import { PRODUCTS } from "@data";
import { finalPrice } from '@utils';

export const ACCOUNT_WISHLIST_PRODUCTS = [
    {
        id: PRODUCTS.TRAY_TABLE.id,
        label: PRODUCTS.TRAY_TABLE.label,
        image: PRODUCTS.TRAY_TABLE.variants.BLACK.image,
        color: PRODUCTS.TRAY_TABLE.variants.BLACK.color,
        price: finalPrice(PRODUCTS.TRAY_TABLE.price, PRODUCTS.TRAY_TABLE.discountPercentage),
    },
    {
        id: PRODUCTS.COZY_SOFA.id,
        label: PRODUCTS.COZY_SOFA.label,
        image: PRODUCTS.COZY_SOFA.variants.BEIGE.image,
        color: PRODUCTS.COZY_SOFA.variants.BEIGE.color,
        price: finalPrice(PRODUCTS.COZY_SOFA.price, PRODUCTS.COZY_SOFA.discountPercentage),
    },
    {
        id: PRODUCTS.BAMBOO_BASKET.id,
        label: PRODUCTS.BAMBOO_BASKET.label,
        image: PRODUCTS.BAMBOO_BASKET.variants.BEIGE.image,
        color: PRODUCTS.BAMBOO_BASKET.variants.BEIGE.color,
        price: finalPrice(PRODUCTS.BAMBOO_BASKET.price, PRODUCTS.BAMBOO_BASKET.discountPercentage),
    },
    {
        id: PRODUCTS.LIGHT_BEIGE_PILLOW.id,
        label: PRODUCTS.LIGHT_BEIGE_PILLOW.label,
        image: PRODUCTS.LIGHT_BEIGE_PILLOW.variants.BEIGE.image,
        color: PRODUCTS.LIGHT_BEIGE_PILLOW.variants.BEIGE.color,
        price: finalPrice(PRODUCTS.LIGHT_BEIGE_PILLOW.price, PRODUCTS.LIGHT_BEIGE_PILLOW.discountPercentage),
    },
];