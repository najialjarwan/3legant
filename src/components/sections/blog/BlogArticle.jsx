

const BlogArticle = ({ article }) => {
    return (
        <div>
            <img src={article.img} />

            <h1>{article.title}</h1>

            <p>{article.date}</p>

            <p>{article.excerpt}</p>
        </div>
    );
}

export default BlogArticle;