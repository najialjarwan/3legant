import { CartItems, Icon } from '@ui';

const OrderSummary = () => {
    return (
        <div
            className='
            w-full max-w-[413px] h-fit px-4 2xl:px-6 py-4
            flex flex-col justify-start gap-4
            border border-n4100 rounded-md'
        >
            <h6 className='text-black-900'>order summary</h6>
            <CartItems canRemoveItem={false} />
            <form className='w-full flex gap-3'>
                <input
                    type="text"
                    placeholder='Input'
                    className='
                    w-full max-w-max px-4
                    text-black-600 body-2
                    border border-black-300 rounded-md
                    outline-0'
                />
                <button
                    className='
                    px-6.5 py-3
                    text-white btn-s
                    bg-n7100 rounded-lg'
                >
                    Apply
                </button>
            </form>
            <div>
                <div className='w-full py-3.5 flex justify-between'>
                    <div className='flex items-center gap-2 text-n7100'>
                        <Icon name="TicketPercent" spanClassName="size-6" />
                        <span className="body-2">JenkateMW</span>
                    </div>
                    <span className='text-green body-2-semi'>-$25.00 [Remove]</span>
                </div>
                <div className='h-px bg-n3100'></div>
                <div className='w-full py-3.5 flex justify-between'>
                    <span className="body-2">Shipping</span>
                    <span className="text-n7100 body-2-semi">Free</span>
                </div>
                <div className='h-px bg-n3100'></div>
                <div className='w-full py-3.5 flex justify-between'>
                    <span className="body-2">Subtotal</span>
                    <span className="text-n7100 body-2-semi">$99.00</span>
                </div>
                <div className='h-px bg-n3100'></div>
                <div className='w-full py-3.5 flex justify-between'>
                    <span className="text-n7100 h7">Total</span>
                    <span className="text-n7100 h7">$234.00</span>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;