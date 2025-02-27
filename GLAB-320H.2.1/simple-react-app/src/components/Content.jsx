//CSS Modules
import styles from "./Content.module.css";
import BookCard from "./BookCard";
import books from "../data/Books.js";

function Content() {

    return (
        <div className={styles.container}>
            <p>This is my first React Application, wish me luck!</p>

            <div className={styles.bookContainer}>
                {books.map((book, index) => {
                    return (
                        <BookCard
                            key={index}
                            {...book}
                        />
                    );
                }
                )}
            </div>

        </div>
    );
}

export default Content;