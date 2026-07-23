import { useBreakpoint } from '@hooks';
import React from "react";

const ORDER_SUMMARY = [
    {
        field: 'order code',
        value: '#0123_45678',
    },
    {
        field: 'date',
        value: 'October 19, 2023',
    },
    {
        field: 'total',
        value: '$1,345.00',
    },
    {
        field: 'Payment method',
        value: 'Credit Card',
    },
]

const OrderCompleteDetails = () => {
    const { isMobile } = useBreakpoint();

    return (
        <div className={isMobile ? "w-full flex flex-col gap-4" : "grid grid-cols-2 gap-x-8 gap-y-4.5"}>
            {ORDER_SUMMARY.map((e, i) =>
                isMobile ? (
                    <div
                        key={i}
                        className='w-full pb-4 flex flex-col gap-2 border-b border-n3100'
                    >
                        <span className='text-n4100 caption-1-semi'>{e.field}:</span>
                        <span className='text-n7100 caption-1-semi'>{e.value}</span>
                    </div>
                ) : (
                    <React.Fragment key={i}>
                        <span className="text-n4100 caption-1-semi">{e.field}:</span>
                        <span className="text-n7100 caption-1-semi">{e.value}</span>
                    </React.Fragment>
                )
            )}
        </div>
    )
}

export default OrderCompleteDetails;