import { useParams } from 'react-router-dom';
import { PRODUCTS_ARRAY } from '@data';

const ProductAdditionalInfo = () => {
    const { id } = useParams();
    const product = PRODUCTS_ARRAY.find(
        product => product.id === Number(id)
    );

    return (
        <div className="py-2 flex flex-col gap-4">
            {product.additionalInfo.map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                    <p className="text-n4100 caption-1-semi">
                        {item.label}
                    </p>

                    <p className="text-n7100 caption-2 whitespace-pre-line">
                        {item.value}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ProductAdditionalInfo;