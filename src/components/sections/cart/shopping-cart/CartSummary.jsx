import { useState } from 'react';
import { CART_STEPS } from '@constants';
import { CART_PRODUCTS } from '@data';
import { calculateCartTotals, formatPrice } from '@utils';

const SHIPPING_OPTIONS = {
    FREE: { id: 'free-shipping', label: 'Free shipping', value: 0 },
    EXPRESS: { id: 'express-shipping', label: 'Express shipping', value: 15 },
    PICK_UP: { id: 'pick-up', label: 'Pick Up', value: 21 }
};

const CartSummary = ({ setStep }) => {
    const [selectedShipping, setSelectedShipping] = useState(SHIPPING_OPTIONS.FREE);

    const { subTotal, total } = calculateCartTotals(CART_PRODUCTS);
    const shippingCost = (() => {
        switch (selectedShipping.id) {
            case 'free-shipping':
                return 0;
            case 'express-shipping':
                return selectedShipping.value;
            case 'pick-up':
                return -(total * selectedShipping.value) / 100;
            default:
                return 0;
        }
    })();
    const finalTotal = total + shippingCost;

    return (
        <section
            className="
                w-full max-w-[413px] p-4
                flex flex-col gap-4 shrink-0
                border border-n4100 rounded-md
            "
        >
            <header className="text-n7100 body-2-semi 2xl:h7">
                Cart Summary
            </header>

            <ul className="flex flex-col gap-3">
                {Object.values(SHIPPING_OPTIONS).map((option) => (
                    <li
                        key={option.label}
                        className={`
                            px-4 py-3.25
                            flex items-center gap-3
                            border border-n4100 rounded-sm
                            cursor-pointer
                            ${selectedShipping === option ? 'bg-n2100 text-white border border-n7100' : 'text-n7100'}
                        `}
                        onClick={() => setSelectedShipping(option)}
                    >
                        <div
                            className="
                                size-4.5
                                flex items-center justify-center shrink-0
                                rounded-full border border-black-900
                            "
                        >
                            {selectedShipping === option && (
                                <div className="size-2.5 bg-black-900 rounded-full" />
                            )}
                        </div>

                        <div className="w-full flex justify-between text-n7100 caption-1-semi 2xl:body-2">
                            <p>{option.label}</p>

                            {option.id === 'pick-up' ? (
                                <p>${option.value.toFixed(2)}</p>
                            ) : (
                                <p>%{option.value.toFixed(2)}</p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            <div className="text-n7100">
                <div className="w-full py-3.25 flex justify-between">
                    <span className="caption-1-bold 2xl:body-2">Subtotal</span>
                    <span className="caption-1-bold 2xl:body-2-semi">{formatPrice(subTotal)}</span>
                </div>

                <div className="w-full py-3.25 flex justify-between body-2-bold 2xl:body-1-semi">
                    <span>Total</span>
                    <span>{formatPrice(finalTotal)}</span>
                </div>
            </div>

            <button
                onClick={() => setStep(CART_STEPS.CHECKOUT)}
                className="w-full px-6.5 py-2.5 mt-2 text-white btn-m bg-n7100 rounded-lg">
                Checkout
            </button>
        </section >
    )
}

export default CartSummary;