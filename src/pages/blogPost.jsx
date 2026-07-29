import { useParams } from 'react-router-dom';
import { ARTICLES_LIST } from '@data';
import { BlogPost } from '@blog';

const BlogPostPage = () => {
    const { slug } = useParams();
    const article = ARTICLES_LIST.find(
        article => article.slug === slug
    );

    if (!article) {
        return <h1>Article not found.</h1>;
    }
    else {
        return (
            <>
                <BlogPost article={article} />
            </>
        )
    }
}

export default BlogPostPage;