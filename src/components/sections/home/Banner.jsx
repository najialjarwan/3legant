import { MoreActionBtn } from '@ui';

const Banner = () => {
    return (
        <section
            className='
            w-full h-[734px] 2xl:h-[532px]
            flex flex-col 2xl:flex-row
            '
        >
            <div
                className='
                relative
                w-full 2xl:w-1/2 h-1/2 2xl:h-full overflow-hidden'>
                <img
                    src="src/assets/images/banner image.png"
                    alt="banner image"
                    className='
                    absolute -bottom-[26px] 2xl:-bottom-[40px]
                    w-full h-[469px] 2xl:h-auto
                    object-fill 2xl:object-fill'
                />
            </div>

            <div
                className='
                w-full 2xl:w-1/2 h-1/2 2xl:h-full px-8 2xl:pl-18 2xl:pr-40
                flex flex-col items-start justify-center gap-6'
            >
                <div
                    className=' h-fit
                    flex flex-col gap-4
                    text-n7100'
                >
                    <p className='text-blue hairline-1'>
                        SALE UP TO 35% OFF
                    </p>

                    <h5
                        className='2xl:h4'>
                        HUNDREDS of <br />
                        New lower prices!
                    </h5>

                    <p className='max-w-[452px]  body-2 2xl:body-1'>
                        It’s more affordable than ever to give every room in your home a stylish makeover
                    </p>
                </div>

                <MoreActionBtn
                    label='Shop Now'
                    labelClass='btn-xs 2xl:btn-s text-n7100'
                    directTo="/shop"
                />
            </div>
        </section>
    );
}

export default Banner;