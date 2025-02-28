import styles from './Score.module.css';

export default function Score({ score }) {

    return (
        <div className={styles.row}>
            <p>{score.date}</p>
            <p>{score.score}</p>
        </div>
    );
}