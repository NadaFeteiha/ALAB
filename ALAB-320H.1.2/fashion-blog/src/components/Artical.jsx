import { ImageArticle } from "./ImageArticle"

export default function Artical({ artical }) {

    return (
        <div className='artical'>
            <h2>{artical.title}</h2>
            <ImageArticle title={artical.title} id={artical.id} />
            <p>
                {artical.content}
            </p>
        </div>
    )
}