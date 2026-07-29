import { useBreakpoint } from '@hooks';
import { GoBackBtn, Breadcrumbs, Icon } from '@ui';

const BlogPostHeader = ({ article }) => {
    const { isMobile } = useBreakpoint();
    const ARTICLE_META = [
        { iconName: "UserCircle", meta: article.author },
        { iconName: "Calendar", meta: article.date }
    ];

    return (
        <header className='flex flex-col gap-12 2xl:gap-14'>
            {isMobile
                ? (<GoBackBtn />)
                : (
                    <Breadcrumbs items={[
                        { label: "home", href: "/" },
                        { label: "blog", href: '/blog' },
                        { label: article.title }]}
                    />
                )
            }
            <div className='w-full flex flex-col gap-6'>
                <span className='text-black hairline-2 uppercase'>article</span>

                <h6 className='max-w-[834px] text-n7100 2xl:h3'>{article.title}</h6>

                <div className='w-full flex justify-between 2xl:justify-start 2xl:gap-12'>
                    {ARTICLE_META.map(({ iconName, meta }) => (
                        <MetaContainer key={meta} iconName={iconName} meta={meta} />
                    ))}
                </div>
            </div>
        </header>
    );
}

export default BlogPostHeader;

const MetaContainer = ({ iconName, meta }) => (
    <div className='flex items-center gap-1 text-n4100'>
        <Icon name={iconName} spanClassName="size-4 2xl:size-6" />
        <span className='caption-1 2xl:body-2'>{meta}</span>
    </div>
);