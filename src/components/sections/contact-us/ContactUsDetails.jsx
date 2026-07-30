import { Icon } from '@ui';
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
        </section>
    );
}

export default ContactUsDetails;