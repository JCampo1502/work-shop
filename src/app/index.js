import "./../styles/main.scss";

import { loadViewCarousel } from "./modules/load-view-carousel";
import { loadViewUpdate } from "./modules/load-view-update";
import { findMovie } from "./modules/find-movie";
import { baseUrl } from "./modules/constant";
import { showMovie } from "./modules/show-movie";

const finderForm = document.querySelector("#finder");
const resultContainer = document.querySelector("#find-results")

if(!document.querySelector("#carousel-container")){    
    loadViewUpdate()    
}else{
    loadViewCarousel();
}

finderForm.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const value = finderForm.search.value;
    const results =await findMovie(baseUrl,value);
    let html = '';
    
    resultContainer.innerHTML = '';
    results.forEach(movie => {
        html += showMovie(movie)
    })
    resultContainer.innerHTML = html;
})




