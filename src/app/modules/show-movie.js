export const showMovie = ({id,Carrusel}) =>{
    return /* html */`
        <div class="card col-4 p-1 bg-black" id="${id}">
            <img src="${Carrusel}" class="card-img-top movie__img img-fluid img-thumbnail" alt="poster"> 
            <button class="delete btn-danger">Eliminar</button>
            <button class="update btn-warning">Actualizar</button>
        </div>
    `;
}

export const showMovies = (data)=>{
    let html = "";
    let j = 0;
    let firstElement = true;
    html += /* html */`
    <div  class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
    `;
    for (let i = 0; i < Math.round(data.length / 3); i++) {                
        html += /* html */`
            <div class="d-flex flex-wrap carousel-item ${firstElement? "active": ""}" >
                ${showMovie(data[j])}
                ${showMovie(data[++j])}
                ${showMovie(data[++j])}
            </div>
        `;
        firstElement = false;
        
    }        
    html+=/* html */` 
            </div>
        </div>`
    return html;
}