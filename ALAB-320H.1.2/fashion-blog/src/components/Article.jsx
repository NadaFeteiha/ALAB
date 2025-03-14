import { ImageArticle } from "./ImageArticle"

export default function Article(props) {
    const article = props.article
    return (
        <div className='article'>
            <h3>{article.date}</h3>
            <h2>{article.title}</h2>
            <ImageArticle title={article.title} id={article.id} />
            <p className="text-article">  {article.content}   </p>
            <div className="continue">
                <button>Continues...</button>
            </div>
            <hr className="divider" />
        </div>
    )
}