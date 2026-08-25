import { NavLinks } from '@navigation';
import { Brand, SocialLinks } from '@ui';

const Footer = () => {
    return (
        <footer
            className="
            w-full px-8 2xl:px-40 pl-8 pt-20 py-12
            flex flex-col gap-10 gap-[49px]
            text-center
            bg-n7100"
        >
            <div
                className="
                w-full 2xl:h-8
                flex flex-col items-center 2xl:flex-row 2xl:justify-between gap-10"
            >
                <div
                    className="
                    w-full 2xl:w-[544px]
                    flex flex-col items-center 2xl:flex-row gap-4 2xl:gap-8"
                >
                    <Brand className='text-white' />

                    <div className='w-6 h-px 2xl:h-6 2xl:w-px bg-n4100'></div>

                    <p
                        className="
                        text-n3100 caption-1"
                    >
                        Gift & Decoration Store
                    </p>
                </div>

                <NavLinks
                    classNames={{
                        ul: `
                        flex flex-col justify-center 2xl:flex-row gap-8 2xl:gap-10
                        text-n1100 caption-1`,
                        li: `justify-center`,
                    }}
                />
            </div>

            <div
                className='
                w-full py-6 2xl:py-4
                flex flex-col 2xl:flex-row-reverse items-center gap-8
                border-t border-t-n4100'
            >
                <SocialLinks color='light' />

                <div
                    className='
                    w-full
                    flex flex-col 2xl:flex-row-reverse 2xl:justify-end items-center gap-7'
                >
                    <div
                        className='flex gap-[inherit] text-n1100 caption-2-bold'
                    >
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </div>

                    <p className='text-n3100 caption-2'>Copyright © 2023 3legant. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;