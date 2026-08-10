import { Breadcrumbs } from '@ui';

const PageHeader = ({ title, openedPage, pageDescription, bgImg }) => {
    return (
        <section className='px-8 2xl:px-40'>
            <div
                className='
                w-full h-[308px] 2xl:h-[392px]
                flex flex-col items-center justify-center gap-4 2xl:gap-6
                bg-cover bg-center'
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <Breadcrumbs items={[
                    { label: 'home', href: '/' },
                    { label: openedPage, }]}
                />

                <h4 className='2xl:h3 text-brand capitalize'>{title}</h4>

                <p className='w-full text-black-900 body-2 2xl:body-1 text-center'>
                    {pageDescription}
                </p>
            </div>
        </section >
    )
}

export default PageHeader;

