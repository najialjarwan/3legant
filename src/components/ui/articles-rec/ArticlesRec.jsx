import { MoreActionBtn, ArticleCard } from '@ui';

const ArticlesRec = ({
    titleVariant,
    title,
    isBtnHidden = false,
    btnLabel,
    labelClass,
    iconClass,
    ARTICLES_LIST,
    withReadMore = true
}) => {
    const VARIANTS = {
        default: 'h5 2xl:4',
        alt: 'h7 2xl:h6',
    };

    return (
        <section
            className='
            w-full px-8 2xl:px-40 py-10 2xl:py-20
            flex flex-col gap-10'
        >
            <header
                data-id='title&action'
                className="w-full flex justify-between items-end"
            >
                <p className={`text-black whitespace-pre-line ${VARIANTS[titleVariant]}`}>
                    {title}
                </p>

                {isBtnHidden ? (
                    <></>
                ) : (
                    <MoreActionBtn
                        label={btnLabel}
                        labelClass={labelClass}
                        iconClass={iconClass}
                        directTo='/blog'
                    />
                )}
            </header>

            <div className='flex flex-col 2xl:flex-row gap-6 2xl:gap-6.25'>
                {ARTICLES_LIST.map((article) => (
                    <ArticleCard key={article.slug} article={article} withReadMore={withReadMore} />
                ))}
            </div>

            {isBtnHidden && (
                <MoreActionBtn
                    label={btnLabel}
                    labelClass={labelClass}
                    iconClass={iconClass}
                    directTo='/blog'
                />)
            }
        </section>
    );
}

export default ArticlesRec;