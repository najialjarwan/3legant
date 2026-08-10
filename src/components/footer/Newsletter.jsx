import { Icon } from '@ui';

const Newsletter = () => {
    return (
        <section
            className='
            relative
            w-full 2xl:h-[360px] px-8 py-[95px] 2xl:p-0 overflow-hidden
            flex flex-col gap-8
            text-center
            bg-[#F2F4F6]'
        >
            <div
                className='
                absolute -left-[240px] -bottom-[150px]
                hidden 2xl:block
                size-[640px]'>
                <img
                    src="/images/products/squared-drawer-unit/squared drawer unit.png"
                    alt=""
                    className='size-full object-cover'
                />
            </div>


            <div
                className='
                absolute -right-[230px] -bottom-[210px]
                hidden 2xl:block
                size-[680px]
                '
            >
                <img
                    src="/images/products/polished-sofa/polished sofa.png"
                    alt=""
                    className='size-full object-cover'
                />
            </div>

            <div
                className='
                2xl:absolute left-1/2 2xl:-translate-x-1/2 top-[101px]
                flex flex-col gap-8'
            >
                <header className='flex flex-col gap-2 text-n7100'>
                    <h6 className='2xl:h4'>Join Our Newsletter</h6>
                    <p
                        className='
                        caption-1 2xl:text-lg 2xl:leading-[30px] font-inter font-normal'
                    >
                        Sign up for deals, new products and promotions
                    </p>
                </header>

                <form
                    action=""
                    className='
                    w-full 2xl:w-[488px] h-13
                    flex items-center justify-between
                    border-b border-b-n450'
                >
                    <div className='flex items-center gap-2'>
                        <Icon name='Email' spanClassName='size-6 text-n7100' />

                        <input
                            type="email"
                            placeholder='Email address'
                            className='h-full text-n4100 btn-s outline-none' />
                    </div>

                    <button className='text-n4100 btn-s'>Signup</button>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;