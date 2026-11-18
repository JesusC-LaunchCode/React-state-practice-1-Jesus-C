import { genres } from "../mock-data/genres"

export default function GenreList({setGenre}){
    const mappedGenre = genres.map(genre => (
         <li key={genre.name} onClick={ () => setGenre(genre.name)}>{genre.name}</li>
    ));
    return(
        <>
           <h2>Select a Genre</h2>
           <ul>
           {mappedGenre}
           </ul>
        </>
    );
}