import { Breadcrumbs } from '@ui';

const ContactUsHeader = () => {
    return (
        <header
            className="
            px-8 2xl:px-40 pb-10 2xl:pb-12 pt-4
            flex flex-col gap-12 2xl:gap-10
            "
        >
            <Breadcrumbs items={[
                { label: "home", href: '/' },
                { label: 'contact us' }]}
            />
            <div className="max-w-[834px] flex flex-col gap-6">
                <h6 className="text-n7100 2xl:h3">
                    We believe in sustainable decor. We’re passionate about life at home.
                </h6>
                <p className='text-n7100 body-2'>
                    Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors 
                    and classic design, which can be incorporated into any decor project. The pieces enchant 
                    for their sobriety, to last for generations, faithful to the shapes of each period, with 
                    a touch of the present
                </p>
            </div>
        </header>
    )
}

export default ContactUsHeader;