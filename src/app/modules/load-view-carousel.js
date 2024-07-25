import { baseUrl } from "./constant";
import { getMovies } from "./get-movies";
import { showMovies } from "./show-movie";
import { postMovie } from "./post-movies";
import { deleteMovie } from "./delete-movie";

export const loadViewCarousel = async()=>{
    const carouselContainer = document.querySelector("#carousel-container")
    const registerForm = document.querySelector("#register");
    const {infantil, adult} = await getMovies(baseUrl);

    const carousels = showMovies(infantil) + showMovies(adult);
    carouselContainer.innerHTML = carousels;
    
    registerForm.addEventListener("submit",async (e)=>{
        e.preventDefault();

        const data = {        
            Type: registerForm.type.value,
            Title: registerForm.title.value,
            Year: registerForm.year.value,
            Value: registerForm.value.value,
            Description: registerForm.description.value,
            Carrusel: registerForm.carrusel.value,
            Trailer: registerForm.trailer.value,
            Poster: registerForm.poster.value
        }
        console.log(data);
        console.log(await postMovie(baseUrl, data))
    });

    carouselContainer.addEventListener("click",async (e)=>{
        const element = e.target;
        const id = element?.parentElement?.id;
        if(
            element.nodeName != "BUTTON" ||
            (
                !element.classList.contains("update") &&
                !element.classList.contains("delete")
            ) ||
            id == ''
        )return;

        if(element.classList.contains("delete")){
            await deleteMovie(baseUrl,id);
            return;
        }
        localStorage.setItem("movie-id",id);
        location.href = "./pages/update.html";
    })
}