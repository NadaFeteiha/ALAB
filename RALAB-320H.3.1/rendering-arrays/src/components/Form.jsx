import styles from './Form.module.css';


export default function Form({ addNewLearner }) {
    return (
        <form className={styles.form}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="bio">Bio</label>
            <textarea type="multiline" id="bio" name="bio" />
            <button type="submit" onClick={addNewLearner}>Add Learner</button>
        </form>
    )
}