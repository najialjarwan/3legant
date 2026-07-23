import { useState } from 'react';
import { InputsContainer, Input, Icon } from '@ui';

const ShippingAddress = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <InputsContainer header="shipping address">
            <Input type="text" placeholder="street address" />
            <Input type="text" placeholder="country" />
            <Input type="text" placeholder="town / city" />
            <div className='flex gap-6'>
                <Input type="text" placeholder="state" />
                <Input type="number" placeholder="zip code" />
            </div>
            <div className='flex gap-3 items-center'>
                <div
                    onClick={() => setIsChecked(!isChecked)}
                    className={`
                    size-6
                    flex items-center justify-center
                    border border-n4100 rounded-sm
                    cursor-pointer
                    ${isChecked ? 'bg-n7100' : ''}
                    `}
                >
                    <Icon
                        name="Check"
                        spanClassName={`size-6 ${isChecked ? 'block' : 'hidden'}`}
                        iconClassName="text-n8"
                    />
                </div>
                <header className='body-2 text-n4100'>Use a different billing address (optional)</header>
            </div>
        </InputsContainer>
    );
}

export default ShippingAddress;