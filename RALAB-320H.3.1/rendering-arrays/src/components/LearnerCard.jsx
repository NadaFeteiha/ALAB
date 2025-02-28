import Score from './Score';

function LearnerCard({ learner }) {
    return (
        <div className="learner-card">
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
            <Score />
        </div>
    );
}

export default LearnerCard;