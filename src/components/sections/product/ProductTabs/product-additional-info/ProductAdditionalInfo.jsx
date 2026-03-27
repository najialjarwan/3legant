import { PRODUCT_ADDITONAL_INFO } from "@data";

const ProductAdditionalInfo = () => (
    <div className="py-2 flex flex-col gap-4">
        {PRODUCT_ADDITONAL_INFO.map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
                <p className="text-n4100 caption-1-semi">
                    {item.infoTitle}
                </p>

                <p className="text-n7100 caption-2 whitespace-pre-line">
                    {item.infoText}
                </p>
            </div>
        ))}
    </div>
)

export default ProductAdditionalInfo;