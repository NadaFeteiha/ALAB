import { useState } from "react";
import style from "./Form.module.css";

export default function Form(props) {
    const [formData, setFormData] = useState({ searchterm: "",});

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.moviesearch(formData.searchterm);
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <input type="submit" value="search" />
            </form>
        </div>
    );
}