import { Icon, Input } from '@ui';
import { CONTACT_US_DETAILS } from '@data';

const ContactUsDetails = () => {
    return (
        <section
            className="px-8 2xl:px-40 pb-10 2xl:pb-20 2xl:pt-12
            flex flex-col items-center gap-10
            "
        >
            <header className="text-black-900 h7 2xl:h4 capitalize">
                contact us
            </header>

            <ul
                className='
                w-full
                grid grid-rows-3 2xl:grid-rows-1 2xl:grid-cols-3 gap-4 2xl:gap-6
                '
            >
                {CONTACT_US_DETAILS.map(({ label, value }) => {
                    const iconName =
                        label === "address"
                            ? "Store"
                            : label === "contact us"
                                ? "Call"
                                : "Email2";
                    return (
                        <li
                            key={label}
                            className='
                            w-full px-8 py-4
                            flex flex-col items-center justify-start self-stretch gap-4
                            bg-n2100
                            '
                        >
                            <Icon
                                name={iconName}
                                spanClassName="size-8"
                                iconClassName="text-n7100"
                            />
                            <div className='flex flex-col items-center gap-2'>
                                <header className='text-n4100 hairline-1 capitalize'>{label}</header>
                                <div className='text-n7100 body-2-semi text-center'>{value}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>

            <div className='w-full flex flex-col 2xl:flex-row-reverse gap-6 2xl:gap-7'>
                <div className='relative w-full 2xl:min-w-[548px] h-[311px] 2xl:h-[404px]'>
                    <img
                        src="/images/3legant/address map placeholder.png"
                        alt=""
                        className='size-full object-cover object-center'
                    />
                    <div className='absolute right-1/2 translate-x-1/2 top-[108px] 2xl:top-[155px]'>
                        <Icon
                            name="Subtract"
                            spanClassName="size-16 text-n7100"
                            iconClassName="w-[48px] h-[53.33]"
                        />
                        <span
                            className='
                            absolute left-1/2 -translate-x-1/2 top-[9.64px]
                            size-10
                            flex items-center justify-center
                            bg-n7100 rounded-full
                            '
                        >
                            <Icon name="Store" spanClassName="size-6" iconClassName="text-n1100" />
                        </span>
                    </div>
                </div>
                <form
                    action=""
                    className='w-full flex flex-col gap-4 2xl:gap-6'
                >
                    <Input type="text" label="full name" placeholder="your name" />
                    <Input type="email" label="email address" placeholder="your email" />
                    <div className='flex flex-col gap-3'>
                        <span className='hairline-2 uppercase text-n4100'>message</span>
                        <textarea
                            placeholder='Your message'
                            className='
                            p-4 min-h-35
                            text-n4100 body-2
                            border border-black-300
                            outline-0 rounded-md
                            resize-none
                            '
                        >
                        </textarea>
                        <button
                            className='
                            w-fit mx-auto 2xl:mx-0 2xl:mr-auto
                            px-10 py-1.5 
                            text-white btn-s capitalize
                            bg-n7100 border border-n7100 rounded-lg
                            hover:text-n7100 hover:bg-transparent
                            transition-all duration-150 ease-linear
                            '
                        >
                            send message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactUsDetails;