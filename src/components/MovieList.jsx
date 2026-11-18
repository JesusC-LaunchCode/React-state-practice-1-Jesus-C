import { movies } from "../mock-data/movies";

export default function MovieList({ currentGenre }){

    const filteredMovies = movies.filter(movie => movie.genre === currentGenre);

    if(filteredMovies.length === 0) {
        return (
            <div>
                <h2>{currentGenre} Movies</h2>
                <p>No movies found.</p>
            </div>
        );
    }

    const movieTitles = filteredMovies.map(movie => (
        <li key={movie.title}>{movie.title}</li>
    ));
 
    return(
        <>
            <h2>{currentGenre} Movies</h2>
            <ul>{movieTitles}</ul>
        </>
    )
}