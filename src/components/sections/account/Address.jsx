import { Icon } from '@ui';
import { BILLING_ADDRESS, SHIPPING_ADDRESS } from '@data';

const Address = () => {
    return (
        <div className='w-full pr-[72px]'>
            <header className="mb-[19px] text-black body-1-semi capitalize">address</header>
            <div className="w-full flex flex-col 2xl:flex-row gap-[23px]">
                <AddressContainer header="billing address" info={BILLING_ADDRESS} />
                <AddressContainer header="shipping address" info={SHIPPING_ADDRESS} />
            </div>
        </div>
    )
}

export default Address;

const AddressContainer = ({ header, info }) => (
    <div className="w-full p-4 border border-n4100 rounded-lg">
        <header className="w-full mb-2 flex items-center justify-between body-2-semi capitalize">
            <span className="text-black">{header}</span>
            <button className="flex items-center gap-1 text-n4100">
                <Icon name="Pen" />
                <span>Edit</span>
            </button>
        </header>
        <ul className="flex flex-col gap-1 text-black caption-1">
            {info.map((info, i) => (
                <li key={i}>
                    {info}
                </li>
            ))}
        </ul>
    </div>
);

