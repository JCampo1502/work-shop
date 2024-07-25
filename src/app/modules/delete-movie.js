import axios from "axios";

export const deleteMovie = async(url, id) =>{
    try {
        await axios.delete(url + "/" + id);
        alert("Pelicula Eliminado!!");
        return true;
    } catch (error) {
        console.error("ERROR: " + error);
        return false;
    }
}