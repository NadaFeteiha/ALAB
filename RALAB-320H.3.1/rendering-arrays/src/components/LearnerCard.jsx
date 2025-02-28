import Score from './Score';
import styles from './LearnerCard.module.css';

function LearnerCard({ learner }) {
    return (
        <div className={styles.card}>
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
            {
                learner.scores.map((score, index) => {
                    return <Score key={index} score={score} />
                })
            }
        </div>
    );
}

export default LearnerCard;