import { useParams } from 'react-router-dom';
import { useBreakpoint } from '@hooks';
import { ARTICLES_LIST } from '@data';
import { BlogPost } from '@blog';
import { ArticlesRec } from '@ui';

const BlogPostPage = () => {
    const { slug } = useParams();
    const { isMobile } = useBreakpoint();
    const article = ARTICLES_LIST.find(
        article => article.slug === slug
    );
    const recommendedArticles = ARTICLES_LIST.filter(a => a.isRecommended);

    if (!article) {
        return <h1>Article not found.</h1>;
    }
    else {
        return (
            <>
                <BlogPost article={article} />

                <ArticlesRec
                    titleVariant="alt"
                    title="you might also like"
                    isBtnHidden={isMobile}
                    btnLabel="more articles"
                    labelClass="text-black-900"
                    iconClass="text-black-900"
                    ARTICLES_LIST={recommendedArticles}
                    withReadMore={false}
                />
            </>
        )
    }
}

export default BlogPostPage;