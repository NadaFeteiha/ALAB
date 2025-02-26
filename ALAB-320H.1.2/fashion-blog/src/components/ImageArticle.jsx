import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';

export function ImageArticle({ title, id }) {

    let img = '';
    if (id === 1) {
        img = img1;
    } else if (id === 2) {
        img = img2;
    }

    return (
        <img src={img} alt={title} />
    )

}