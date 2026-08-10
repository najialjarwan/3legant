import { PageHeader } from '@ui';
import { BlogContent } from '@blog';

const BlogPage = () => {
    return (
        <>
            <PageHeader
                title="our blog"
                openedPage="Blog"
                pageDescription="Home ideas and design inspiration"
                bgImg="/images/heros/blog-hero.png"
            />

            <BlogContent />
        </>
    );
}

export default BlogPage;