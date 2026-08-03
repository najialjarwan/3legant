import { Link } from 'react-router-dom';
import { useBreakpoint, useExpandableList } from '@hooks';
import { ARTICLES_LIST } from '@data';
import { GRID_MODES, BLOG_GRID_CLASSES } from '@constants';
import { setGridItemsLimit } from '@utils';
import { ShowMoreBtn } from '@ui';

const BlogArticles = ({ gridMode, showFeaturedOnly }) => {
    const { isMobile } = useBreakpoint();
    const FILTERED_ARTICLES = showFeaturedOnly
        ? ARTICLES_LIST.filter(a => a.isFeatured)
        : ARTICLES_LIST;
    const isHorizontalArticle = gridMode === GRID_MODES.GRID_4X2;

    const gridLimit = isMobile
        ? setGridItemsLimit(GRID_MODES.GRID_4X2, GRID_MODES)
        : setGridItemsLimit(gridMode, GRID_MODES);
    const {
        visibleItems,
        canExpand,
        expanded,
        handleToggle,
    } = useExpandableList({
        items: FILTERED_ARTICLES,
        initialVisibleCount: gridLimit,
    });

    return (
        <section className="2xl:px-40 pb-20 2xl:pt-10 flex flex-col items-center gap-10 2xl:gap-20">
            <ul
                className={`
                grid grid-cols-1 2xl:gap-x-[25px] gap-y-4 2xl:gap-y-10
                ${BLOG_GRID_CLASSES(gridMode, GRID_MODES)}
                `}
            >
                {visibleItems.map((article, index) => (
                    <li key={index}>
                        <Link
                            to={`/blog/${article.slug}`}
                            className={`cursor-pointer ${isHorizontalArticle ? 'flex' : ''}`}
                        >
                            <div
                                className={`
                                    min-w-[250px] max-w-[312px] 2xl:max-w-full mb-6 h-[283px]
                                    ${gridMode === GRID_MODES.GRID_3X3 ? '2xl:h-[325px]' : '2xl:h-[240px]'}`}
                            >
                                <img
                                    src={article.img}
                                    alt="article image"
                                    className='size-full object-cover object-center'
                                />
                            </div>
                            <div className={isHorizontalArticle ? 'px-6 flex flex-col gap-6' : ''}>
                                <div>
                                    <p
                                        className='
                                        max-w-[312px] 2xl:w-auto mb-2
                                        text-n2 text-[16px]/[26px] font-inter font-medium 2xl:h7
                                        '
                                    >
                                        {article.title}
                                    </p>

                                    {isHorizontalArticle && (<p>{article.excerpt}</p>)}
                                </div>

                                <p className='text-n4100 caption-2'>{article.date}</p>

                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            {canExpand && (
                <ShowMoreBtn
                    onClick={handleToggle}
                    label={expanded ? 'Show less' : 'Show more'}
                />
            )}
        </section >
    );
}

export default BlogArticles;