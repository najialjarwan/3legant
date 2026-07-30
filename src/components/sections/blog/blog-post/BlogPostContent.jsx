import { Fragment } from 'react';

const BlogPostContent = ({ article }) => {
    return (
        <div className="flex flex-col gap-4 2xl:gap-10">
            <ArticleImage
                src={article.img}
                height="h-[407px] 2xl:h-[647px]"
            />

            <div className="text-black">
                <p className="body-2">{article.excerpt}</p>

                <ArticleText sections={[article.content[0]]} />
            </div>

            <div className="2xl:flex gap-6">
                <ArticleImage src={article.content[0].image} />

                <ArticleImage
                    src={article.content[1].image}
                    className="hidden 2xl:block"
                />
            </div>

            <ArticleText sections={[article.content[1]]} />

            <ArticleImage
                src={article.content[1].image}
                className="2xl:hidden"
            />

            <ArticleText
                sections={[article.content[2]]}
                className="2xl:hidden"
            />

            <ArticleText
                sections={[article.content[2]]}
                className="hidden 2xl:block"
            />

            <div className="flex flex-col gap-4 2xl:flex-row 2xl:gap-6">
                <ArticleImage src={article.content[2].image} />

                <ArticleText
                    sections={[
                        article.content[3],
                        article.content[4],
                    ]}
                />
            </div>
        </div>
    );
}

export default BlogPostContent;

const ArticleImage = ({ src, className = "", height = "h-[407px] 2xl:h-[647px]" }) => (
    <div className={`w-full ${height} ${className}`}>
        <img
            src={src}
            alt="article"
            className="size-full object-cover object-center"
        />
    </div>
);

const ArticleText = ({ sections, className = "" }) => (
    <div className={`text-black ${className}`}>
        {sections.map(({ header, text }) => (
            <Fragment key={header}>
                <h6>{header}</h6>
                <p className="body-2">{text}</p>
            </Fragment>
        ))}
    </div>
);