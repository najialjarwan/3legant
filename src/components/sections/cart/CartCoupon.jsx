import { Icon } from '@ui';

const CartCoupon = () => {
    return (
        <div className='max-w-[424px] flex flex-col gap-4'>
            <header className='mb-1.75 text-n7100 body-2-semi 2xl:h7'>
                Have a coupon?
            </header>

            <p className='text-n4100 caption-1 2xl:body-2'>
                Add your code for an instant cart discount
            </p>

            <form
                action=""
                className='px-4 py-3 inline-flex gap-2 border border-n4100'
            >
                <div className='flex items-center gap-2'>
                    <Icon
                        name="TicketPercent"
                        className="size-6"
                    />
                    <input
                        type="text"
                        placeholder='Coupon code'
                        className='w-full text-n4100 btn-s outline-none'
                    />
                </div>

                <button
                    type='submit'
                    className='ml-auto text-n7100 btn-s'
                >
                    Apply
                </button>
            </form>
        </div>
    )
}

export default CartCoupon;