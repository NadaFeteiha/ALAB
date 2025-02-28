import styles from './Form.module.css';
import { useState } from 'react';


export default function Form({ addNewLearner }) {
    const [formData, setFormData] = useState({ name: "", bio: "" });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!formData.name.trim()) return;

        addNewLearner(formData);
        setFormData({ name: "", bio: "" });
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />

            <label htmlFor="bio">Bio</label>
            <textarea
                type="multiline"
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
            />

            <button type="submit">Add Learner</button>
        </form>
    )
}