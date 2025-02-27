import styles from './BookCard.module.css';

function BookCard({ title, author, image, description }) {
    return (
        <div className={styles.container}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{description}</p>
        </div>
    );
}

export default BookCard;