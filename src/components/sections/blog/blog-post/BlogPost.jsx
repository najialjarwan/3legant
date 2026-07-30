import { BlogPostHeader, BlogPostContent } from '@blog';

const BlogPost = ({ article }) => (
    <section
        className='
        px-8 2xl:px-40 pb-20 pt-4
        flex flex-col gap-8 2xl:gap-10
        '
    >
        <BlogPostHeader article={article} />
        <BlogPostContent article={article} />
    </section>
);

export default BlogPost;