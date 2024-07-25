import axios from "axios"

export const postMovie = async (url, data)=>{
    try {
        const res = await axios.post(url,data);
        alert("Pelicula Registrado!!");
        return res;
    } catch (error) {
        console.error("ERROR: " + error);
        return null;
    }
}