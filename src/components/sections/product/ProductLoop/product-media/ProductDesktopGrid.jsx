import { Badges } from '@ui';

const ProductDesktopGrid = ({ images }) => {
    return (
        <div className="h-fit grid grid-cols-2 grid-row-3 gap-6">
            {images.map((image, i) => (
                <div
                    key={i}
                    className='relative w-[262px] h-[355px] bg-n2100 flex items-center'
                >
                    <img
                        src={image}
                        alt=""
                        className={`w-full ${i === 0 ? 'h-78' : 'h-full'} object-cover`}
                    />

                    {i === 0
                        ? <Badges
                            variant='large'
                            containerClass='left-4 top-4' />
                        : ''}
                </div>
            ))}
        </div>
    )
}

export default ProductDesktopGrid;