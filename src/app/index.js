import "./../styles/main.scss";

import { loadViewCarousel } from "./modules/load-view-carousel";
import { loadViewUpdate } from "./modules/load-view-update";


if(!document.querySelector("#carousel-container")){    
    loadViewUpdate()    
}else{
    loadViewCarousel();
}




