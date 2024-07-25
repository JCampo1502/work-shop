import { getMovies } from "./get-movies"

export const findMovie = async(url, title) =>(await getMovies(url)).filter(movie =>movie.Title.toLowerCase().includes(title.toLowerCase()));