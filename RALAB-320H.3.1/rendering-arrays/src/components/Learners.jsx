import LearnerCard from "./LearnerCard";


export default function Learners({ learnerList }) {
    return (
        <div>
            {
                learnerList.map((learner) => (
                    <LearnerCard key={learner.id} learner={learner} />
                )
                )
            }
        </div>
    );
}
