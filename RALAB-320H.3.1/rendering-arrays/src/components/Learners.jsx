import LearnerCard from "./LearnerCard";
import styles from './Learners.module.css';


export default function Learners({ learnerList }) {
    return (
        <div className={styles.container}>
            {
                learnerList.map((learner) => (
                    <LearnerCard key={learner.id} learner={learner} />
                )
                )
            }
        </div>
    );
}
