import { Icon } from '@ui';
import { HOME_VALUES } from '@data';

const Values = ({ variant = "def" }) => {
    const SPACING_VARIANT = {
        def: '2xl:py-12 bg-white',
        alt: "2xl:py-4 bg-n2100"
    }
    return (
        <section
            className={`
            p-8 2xl:px-40
            grid grid-cols-2 2xl:grid-cols-4 gap-x-2 2xl:gap-x-6 gap-y-6
            ${SPACING_VARIANT[variant]}
            `}
        >
            {HOME_VALUES.map((value, index) => (
                <div
                    key={index}
                    className='
                    px-4 py-8 2xl:px-8 2xl:py-12
                    flex flex-col items-start gap-4
                    bg-n2100
                    '
                >
                    <Icon
                        name={value.iconName}
                        spanClassName='size-12'
                    />
                    <div className={`flex flex-col 2xl:gap-2 ${index >= 2 ? 'gap-2' : 'gap-1'}`}>
                        <header className='text-n7100 caption-1-semi 2xl:h7'>
                            {value.title}
                        </header>

                        <p className='text-n4100 caption-1 2xl:caption whitespace-pre-line 2xl:whitespace-normal'>
                            {value.text}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Values;