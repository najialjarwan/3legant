import { useState } from 'react';
import { InputsContainer, Input, Icon } from '@ui';

const PAYMENT_METHODS = ['Pay by Credit Card', 'Paypal'];

const PaymentMethod = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(PAYMENT_METHODS[0]);

    return (
        <InputsContainer header="payment method">
            {PAYMENT_METHODS.map((method, i) => (
                <li
                    key={i}
                    onClick={() => setSelectedPaymentMethod(method)}
                    className={`
                                px-4 py-3.25
                                flex items-center gap-3
                                border border-n4100 rounded-sm
                                cursor-pointer
                                ${selectedPaymentMethod === method ? 'bg-n2100 text-white border border-n7100' : 'text-n7100'}`}
                >
                    <div className="
                                    size-4.5
                                    flex items-center justify-center shrink-0
                                    rounded-full border border-black-900"
                    >
                        {selectedPaymentMethod === method && (
                            <div className="size-2.5 bg-black-900 rounded-full" />
                        )}
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <p className='body-2 text-n7100'>{method}</p>
                        {i === 0 && (
                            <Icon name="Money" spanClassName="size-6" iconClassName="text-n7100" />
                        )}
                    </div>
                </li>
            ))}
            <div className='w-full h-px bg-n4100'></div>
            <Input type="text" placeholder="card number" />
            <div className='flex gap-6'>
                <Input type="text" placeholder="expiry date" />
                <Input type="text" placeholder="cvv" />
            </div>
        </InputsContainer>
    );
}

export default PaymentMethod;