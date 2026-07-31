import { MoreActionBtn } from '@ui';

const AboutUs = () => {
    return (
        <section className='px-8 2xl:px-40 flex flex-col 2xl:flex-row'>
            <div className='w-full h-[311px] 2xl:h-[413px]'>
                <img
                    src="src/assets/images/banner image.png"
                    alt="banner image"
                    className='size-full object-cover'
                />
            </div>
            <div
                className='
                w-full h-[311px] 2xl:h-[413px] px-4 2xl:pl-18 2xl:pr-0
                flex flex-col justify-center gap-6
                bg-n2100
                '
            >
                <div>
                    <h6 className="mb-4 text-black-900 h7 2xl:h4 capitalize">
                        about us
                    </h6>
                    <p className='max-w-[452px] text-n7100 caption-1 2xl:body-2'>
                        3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.<br />
                        Our customer service is always prepared to support you 24/7
                    </p>
                </div>
                <MoreActionBtn
                    label="shop now"
                    labelClass="text-black-900 btn-s!"
                    iconSpanClass="size-5"
                    iconClass="text-black-900"
                    directTo="/shop"
                />
            </div>
        </section>
    );
}

export default AboutUs;