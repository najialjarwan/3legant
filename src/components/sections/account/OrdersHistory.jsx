import { useBreakpoint } from '@hooks';
import { ORDERS_HISTORY } from '@data';
import { formatPrice } from '@utils';

const OrdersHistory = () => {
    const { isMobile } = useBreakpoint();
    const FIELD_LABELS = [
        "number ID",
        "dates",
        "status",
        "price",
    ]

    return (
        <div className='w-full pr-[72px]'>
            <header className='mb-10 text-black body-1-semi capitalize'>orders history</header>
            {isMobile
                ?
                ORDERS_HISTORY.map((order) => (
                    <div
                        key={order.numberID}
                        className='py-4 flex justify-between border-b border-b-n3100
                        '
                    >
                        <ul className='w-[152px] flex flex-col gap-4 text-n4100 caption-1 capitalize'>
                            {FIELD_LABELS.map((field) => (
                                <li key={field}>{field}</li>
                            ))}
                        </ul>
                        <ul className='w-[150px] flex flex-col gap-4 text-n7100 caption-1 capitalize'>
                            <li>{order.numberID}</li>
                            <li>{order.dates}</li>
                            <li>{order.status}</li>
                            <li>{formatPrice(order.price)}</li>
                        </ul>
                    </div>
                ))
                : (
                    <table className='w-full caption-1 text-left capitalize'>
                        <thead>
                            <tr className='[&>th]:pb-2 text-n4100 border-b border-b-n3100'>
                                {FIELD_LABELS.map((label) => (
                                    <th key={label} className='w-[130px] font-normal'>{label}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className='text-n7100'>
                            {ORDERS_HISTORY.map((order) => (
                                <tr key={order.numberID} className='[&>td]:py-6 border-b border-b-n3100'>
                                    <td>{order.numberID}</td>
                                    <td>{order.dates}</td>
                                    <td>{order.status}</td>
                                    <td>{formatPrice(order.price)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
        </div>
    )
}
export default OrdersHistory;