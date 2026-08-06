import { SHOP_CATEGORIES } from "@data";

const ProductMeta = ({ product }) => {
    return (
        <div className={` flex flex-col gap-2`}>
            <p className='flex gap-[98px]'>
                <span className='text-n4100 caption-2'>SKU</span>
                <span className='text-n7100 caption-2'>{product.SKU}</span>
            </p>

            <div className='flex gap-[58px]'>
                <p className='text-n4100 caption-2'>Category</p>
                <p className="text-n7100 caption-2 capitalize">
                    {product.categories
                        .map((cat) => SHOP_CATEGORIES[cat].label)
                        .join(", ")}
                </p>
            </div>
        </div>
    )
}

export default ProductMeta;