import axios from "axios"

export const getMovies = async(url)=>{
    try {
        const res = await axios.get(url);
        return res.data;
        
    } catch (error) {
        console.error("ERROR: " + error);
        return [];
    }
}