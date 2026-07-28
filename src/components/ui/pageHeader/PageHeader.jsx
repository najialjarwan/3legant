import { Link } from 'react-router-dom';
import { Icon } from '@ui';

const PageHeader = ({ title, openedPage, pageDescription, bgImg }) => {
    return (
        <section className='px-8 2xl:px-40'>
            <div
                className='
                w-full h-[308px] 2xl:h-[392px]
                flex flex-col items-center justify-center gap-4 2xl:gap-6
                bg-[url("src/assets/images/shop-hero-image.png")] bg-cover bg-center'
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <div className='flex gap-4 btn-xs'>
                    <Link to="/" className='flex items-center gap-1'>
                        <span className='text-black-600'>Home</span>
                        <Icon
                            name='ChevronRight'
                            spanClassName='size-3'
                            iconClassName='w-[4px] h-[7px] text-black-600'
                        />
                    </Link>

                    <p className='text-black-900 capitalize'>{openedPage}</p>
                </div>

                <h4 className='2xl:h3 text-brand capitalize'>{title}</h4>

                <p className='w-full text-black-900 body-2 2xl:body-1 text-center'>
                    {pageDescription}
                </p>
            </div>
        </section >
    )
}

export default PageHeader;

