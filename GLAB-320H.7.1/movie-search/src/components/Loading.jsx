import style from './Loading.module.css';

export default function Loading({ isLoading }) {

    if (!isLoading) {
        return;
    } else {
        return (
            <div className={style.container}>
                <h1>Loading...</h1>
                <div className={style.loader}></div>
            </div>
        )
    }
}