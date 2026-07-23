const OrderCompleteHeader = () => (
    <header className='flex flex-col gap-4 2xl:text-center'>
        <p className='text-n4100 body-2-semi 2xl:h6'>Thank you! 🎉</p>
        <p className="max-w-[280px] 2xl:max-w-[492px] text-n2 h5 2xl:h4">
            Your order <br className="2xl:hidden" />
            has been <br className="2xl:hidden" />
            received
        </p>

    </header>
)

export default OrderCompleteHeader;