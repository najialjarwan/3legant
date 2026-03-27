const timerBlocks = [
    {
        number: '02',
        in: 'Days',
    },
    {
        number: '12',
        in: 'Hours',
    },
    {
        number: '45',
        in: 'Minutes',
    },
    {
        number: '05',
        in: 'Seconds',
    },
]

const ProductOfferCountdown = () => {
    return (
        <div className='flex flex-col gap-3'>
            <p className='text-n5100 body-2'>Offer expires in:</p>

            <div className='flex gap-4'>
                {timerBlocks.map((block, i) => (
                    <div
                        key={i}
                        className='flex flex-col items-center'>
                        <h5 className='size-15 flex items-center justify-center bg-n2100'>
                            {block.number}
                        </h5>
                        <p className='text-n4100 caption-2'>
                            {block.in}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductOfferCountdown;