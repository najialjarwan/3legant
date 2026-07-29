import { useParams } from 'react-router-dom';
import { ARTICLES_LIST } from '@data';
import { BlogArticle } from '@blog';

const BlogArticlePage = () => {
    const { slug } = useParams();
    const article = ARTICLES_LIST.find(
        article => article.slug === slug
    );
    if (!article) {
        return <h1>Article not found.</h1>;
    } else {
        return <BlogArticle article={article} />;
    }
}

export default BlogArticlePage;