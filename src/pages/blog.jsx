import { PageHeader } from '@ui';
import { BlogContent } from '@blog';

const BlogPage = () => {
    return (
        <>
            <PageHeader
                title="our blog"
                openedPage="Blog"
                pageDescription="Home ideas and design inspiration"
                bgImg="src/assets/images/blog-hero-image.png"
            />

            <BlogContent />
        </>
    );
}

export default BlogPage;