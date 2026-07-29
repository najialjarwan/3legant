import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBreakpoint } from '@hooks';
import { ARTICLES_LIST } from '@data';
import { GRID_MODES, BLOG_GRID_CLASSES } from '@constants';
import { setGridItemsLimit } from '@utils';
import { ShowMoreBtn } from '@ui';

const BlogArticles = ({ activeSelector, showFeaturedOnly }) => {
    const { isMobile } = useBreakpoint();
    const FILTERED_ARTICLES = showFeaturedOnly
        ? ARTICLES_LIST.filter(a => a.isFeatured)
        : ARTICLES_LIST;
    const isHorizontalArticle = activeSelector === GRID_MODES.GRID_4X2;

    const gridLimit = isMobile
        ? setGridItemsLimit(GRID_MODES.GRID_4X2, GRID_MODES)
        : setGridItemsLimit(activeSelector, GRID_MODES);

    const [visibleCount, setVisibleCount] = useState(gridLimit);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setVisibleCount(gridLimit);
        setExpanded(false);
    }, [gridLimit]);

    const handleToggle = () => {
        if (expanded) {
            setVisibleCount(gridLimit);
            setExpanded(false);
        } else {
            setVisibleCount(FILTERED_ARTICLES.length);
            setExpanded(true);
        }
    };

    return (
        <section className="2xl:px-40 pb-20 2xl:pt-10 flex flex-col items-center gap-10 2xl:gap-20">
            <ul
                className={`
                grid grid-cols-1 2xl:gap-x-[25px] gap-y-4 2xl:gap-y-10
                ${BLOG_GRID_CLASSES(activeSelector, GRID_MODES)}
                `}
            >
                {FILTERED_ARTICLES
                    .slice(0, visibleCount)
                    .map((article, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer ${isHorizontalArticle ? 'flex' : ''}
                            `}
                        >
                            <Link to={`/blog/${article.slug}`}>
                                <div className='max-w-[312px] min-w-[250px] 2xl:max-w-full mb-6'>
                                    <img src={article.img} alt="article image" />
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
            {FILTERED_ARTICLES.length > gridLimit && (
                <ShowMoreBtn
                    onClick={handleToggle}
                    label={expanded ? 'Show less' : 'Show more'}
                />
            )}
        </section>
    );
}

export default BlogArticles;