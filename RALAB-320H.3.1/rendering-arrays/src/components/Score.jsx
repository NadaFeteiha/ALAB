import styles from './Score.module.css';

export default function Score({ score }) {

    return (
        <tr className={styles.row}>
            <td>{score.date}</td>
            <td>{score.score}</td>
        </tr>
    );
}