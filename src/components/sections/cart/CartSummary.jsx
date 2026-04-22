const SHIPPING_OPTIONS = [
    { label: 'Free shipping', type: '$', value: 0 },
    { label: 'Express shipping', type: '+$', value: 15 },
    { label: 'Pick Up', type: '%', value: 21 }
];


const CartSummary = () => {
    return (
        <section
            className="
                w-full max-w-[413px] p-4
                flex flex-col gap-4 shrink-0
                border border-n4100 rounded-md
            "
        >
            <header className="text-n7100 body-2-semi 2xl:h7">
                Cart Summary
            </header>

            <ul className="flex flex-col gap-3">
                {SHIPPING_OPTIONS.map((option) => (
                    <li
                        key={option.label}
                        className="
                            px-4 py-3.25
                            flex items-center gap-3
                            border border-n4100
                        "
                    >
                        <div className="size-4.5 shrink-0 rounded-full border border-black-900">

                        </div>

                        <div className="w-full flex justify-between text-n7100 caption-1-semi 2xl:body-2">
                            <p>{option.label}</p>
                            <p>
                                {option.value !== 21 && (
                                    <>{option.type}{option.value.toFixed(2)}</>
                                )}
                                {option.value === 21 && (
                                    <>{option.value}{option.type}</>
                                )}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="text-n7100">
                <div className="w-full py-3.25 flex justify-between">
                    <span className="caption-1-bold 2xl:body-2">Subtotal</span>
                    <span className="caption-1-bold 2xl:body-2-semi">$199.99</span>
                </div>

                <div className="w-full py-3.25 flex justify-between body-2-bold 2xl:body-1-semi">
                    <span>Total</span>
                    <span>$214.99</span>
                </div>
            </div>

            <button className="w-full px-6.5 py-2.5 mt-2 text-white btn-m bg-n7100 rounded-lg">
                Checkout
            </button>
        </section >
    )
}

export default CartSummary;