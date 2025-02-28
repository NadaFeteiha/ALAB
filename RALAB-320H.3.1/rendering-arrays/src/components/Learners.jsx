import LearnerCard from "./LearnerCard";
import styles from './Learners.module.css';


export default function Learners({ learnerList }) {
    return (
        <div className={styles.body}>
            <div>
                <h2>Learners</h2>
                <button>Add new Learner</button>
            </div>

            <div className={styles.container}>
                {
                    learnerList.map((learner) => (
                        <LearnerCard key={learner.id} learner={learner} />
                    ))
                }
            </div>
        </div>
    );
}
