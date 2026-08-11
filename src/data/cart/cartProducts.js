import { PRODUCTS } from '@data';
import { finalPrice } from '@utils';

export const CART_PRODUCTS = [
    {
        id: PRODUCTS.TRAY_TABLE.id,
        label: PRODUCTS.TRAY_TABLE.label,
        image: PRODUCTS.TRAY_TABLE.variants.BLACK.image,
        color: PRODUCTS.TRAY_TABLE.variants.BLACK.color,
        quantity: 2,
        price: finalPrice(PRODUCTS.TRAY_TABLE.price, PRODUCTS.TRAY_TABLE.discountPercentage),
        taxRate: PRODUCTS.TRAY_TABLE.taxRate,
    },
    {
        id: PRODUCTS.TRAY_TABLE.id,
        label: PRODUCTS.TRAY_TABLE.label,
        image: PRODUCTS.TRAY_TABLE.variants.RED.image,
        color: PRODUCTS.TRAY_TABLE.variants.RED.color,
        quantity: 2,
        price: finalPrice(PRODUCTS.TRAY_TABLE.price, PRODUCTS.TRAY_TABLE.discountPercentage),
        taxRate: PRODUCTS.TRAY_TABLE.taxRate,
    },
    {
        id: PRODUCTS.TABLE_LAMP.id,
        label: PRODUCTS.TABLE_LAMP.label,
        image: PRODUCTS.TABLE_LAMP.variants.GOLD.image,
        color: PRODUCTS.TABLE_LAMP.variants.GOLD.color,
        quantity: 1,
        price: finalPrice(PRODUCTS.TABLE_LAMP.price, PRODUCTS.TABLE_LAMP.discountPercentage),
        taxRate: PRODUCTS.TABLE_LAMP.taxRate,
    },
]