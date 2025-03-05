import style from './MovieDisplay.module.css';

export default function MovieDisplay({ movie, isLoading }) {
    const loaded = () => {
        return (
            <div className={style.container}>
                <img src={movie.Poster} alt={movie.Title} />
                <div className={style.movie} >
                    <h1>{movie.Title}</h1>
                    <h2>{movie.Genre}</h2>
                    <h2>{movie.Year}</h2>
                </div>
            </div>
        );
    };

    const loading = () => { return; };

    return isLoading ? loading() : loaded();
}