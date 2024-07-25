import { baseUrl } from "./constant";
import { getMovies } from "./get-movies";
import { patchMovie } from "./patch-movie";

export const loadViewUpdate = async() =>{    
    const id = localStorage.getItem("movie-id");    
    const data = (await getMovies(baseUrl + "?id=" + id))[0];
    const updaterForm = document.querySelector("#updater");

    updaterForm.type.value = data.Type;
    updaterForm.title.value = data.Title;
    updaterForm.year.value = data.Year;
    updaterForm.value.value = data.Value;
    updaterForm.description.value = data.Description;
    updaterForm.carrusel.value = data.Carrusel;
    updaterForm.trailer.value = data.Trailer;
    updaterForm.poster.valu = data.Poster;
    updaterForm.addEventListener(('submit'),async (e)=>{
        e.preventDefault();
        const id = localStorage.getItem("movie-id");
        const data = {        
            Type: updaterForm.type.value,
            Title: updaterForm.title.value,
            Year: updaterForm.year.value,
            Value: updaterForm.value.value,
            Description: updaterForm.description.value,
            Carrusel: updaterForm.carrusel.value,
            Trailer: updaterForm.trailer.value,
            Poster: updaterForm.poster.value
        }
        console.log(data);
        console.log(await patchMovie(baseUrl + "/" + id, data))
    });
}