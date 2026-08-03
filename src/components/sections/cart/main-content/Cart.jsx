import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useBreakpoint } from '@hooks';
import { CART_STEPS } from '@constants';
import {
    CartHeader, CartProducts, CartCoupon, CartSummary,
    ContactInformation, ShippingAddress, PaymentMethod, PlaceOrderBtn, OrderSummary,
    OrderCompleteHeader, OrderCompleteItems, OrderCompleteDetails, PurchaseHistoryBtn
} from '../index';

const Cart = () => {
    const { isMobile } = useBreakpoint();
    const location = useLocation();
    const [step, setStep] = useState(location.state?.step ?? CART_STEPS.CART);

    return (
        <section className="
                px-8 2xl:px-40 pb-20 pt-4 2xl:pt-20
                flex flex-col gap-10 2xl:gap-20"
        >
            <CartHeader step={step} setStep={setStep} />

            {step === CART_STEPS.CART && (
                <>
                    <div className='flex justify-between'>
                        <CartProducts />
                        {!isMobile && <CartSummary step={step} setStep={setStep} />}
                    </div>
                    <CartCoupon />
                    {isMobile && <CartSummary step={step} setStep={setStep} />}
                </>
            )}

            {step === CART_STEPS.CHECKOUT && (
                <div className='flex flex-col 2xl:flex-row gap-6 2xl:justify-between'>
                    <div className='w-full max-w-[643px] flex flex-col gap-6'>
                        <ContactInformation />
                        <ShippingAddress />
                        <PaymentMethod />
                        {!isMobile && <PlaceOrderBtn onClick={() => setStep(CART_STEPS.COMPLETE)} />}
                    </div>

                    <OrderSummary />
                    {isMobile && <PlaceOrderBtn onClick={() => setStep(CART_STEPS.COMPLETE)} />}
                </div>
            )}

            {step === CART_STEPS.COMPLETE && (
                <div
                    className='
                    w-max p-4 2xl:px-[95px] 2xl:py-20 mx-auto
                    flex flex-col items-start 2xl:items-center gap-10
                    bg-white border border-n3100 2xl:border-0 rounded-sm 2xl:rounded-lg shadow-3
                    '
                >
                    <OrderCompleteHeader />
                    <OrderCompleteItems />
                    <OrderCompleteDetails />
                    <PurchaseHistoryBtn />
                </div>
            )}
        </section>
    )
}

export default Cart;