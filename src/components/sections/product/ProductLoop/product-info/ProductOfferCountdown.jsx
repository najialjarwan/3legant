import { useEffect, useState } from 'react'

const ProductOfferCountdown = () => {
    const duration = 3 * 24 * 60 * 60 * 1000
    const targetTime = Date.now() + duration

    const calculateTimeLeft = () => {
        const diff = targetTime - Date.now()
        if (diff <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00' }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((diff / (1000 * 60)) % 60)
        const seconds = Math.floor((diff / 1000) % 60)

        return {
            days: String(days).padStart(2, '0'),
            hours: String(hours).padStart(2, '0'),
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0'),
        }
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const timerBlocks = [
        { number: timeLeft.days, in: 'Days' },
        { number: timeLeft.hours, in: 'Hours' },
        { number: timeLeft.minutes, in: 'Minutes' },
        { number: timeLeft.seconds, in: 'Seconds' },
    ]

    return (
        <div className='flex flex-col gap-3'>
            <p className='text-n5100 body-2'>Offer expires in:</p>
            <div className='flex gap-4'>
                {timerBlocks.map((block, i) => (
                    <div key={i} className='flex flex-col items-center'>
                        <h5 className='size-15 flex items-center justify-center bg-n2100'>
                            {block.number}
                        </h5>
                        <p className='text-n4100 caption-2'>{block.in}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductOfferCountdown
