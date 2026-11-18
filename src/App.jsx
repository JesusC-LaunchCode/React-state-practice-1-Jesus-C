import './App.css';
import { useState } from 'react';
import GenreList from './components/GenreList';
import MovieList from './components/MovieList';

export default function App() {
	const [currentGenre, setCurrentGenre] = useState("");

	return(
	<>
		<GenreList setGenre={setCurrentGenre}/>
		<MovieList currentGenre={currentGenre}/>
	</>
	)
}


