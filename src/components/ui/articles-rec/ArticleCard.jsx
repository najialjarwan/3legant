import { MoreActionBtn } from '@ui';

const ArticleCard = ({ article, withReadMore = true }) => {
    return (
        <div className='w-full flex flex-col gap-4 2xl:gap-6'>
            <div className='w-full h-[283px] 2xl:h-[325px]'>
                <img
                    src={article.img}
                    alt=""
                    className="size-full object-cover object-center"
                />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-n2 body-2-semi 2xl:h7'>{article.shortTitle || article.title}</p>
                {withReadMore
                    ? (<MoreActionBtn
                        label='read more'
                        labelClass='text-n7100'
                        iconClass='2xl:text-n4100'
                        directTo={`/blog/${article.slug}`}
                    />)
                    : (<p className='text-n4100 caption-2'>{article.date}</p>)}
            </div>
        </div>
    );
}

export default ArticleCard;