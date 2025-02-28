import Score from './Score';
import styles from './LearnerCard.module.css';

function LearnerCard({ learner }) {
    return (
        <div className={styles.card}>
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
            <Score />
        </div>
    );
}

export default LearnerCard;