import axios from "axios"

export const patchMovie = async (url, data)=>{
    try {
        const res = await axios.patch(url,data);   
        alert("Pelicula Actualizado!!");     
        return res;
    } catch (error) {
        console.error("ERROR: " + error);
        return null;
    }
}