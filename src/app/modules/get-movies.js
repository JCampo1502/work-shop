import axios from "axios"

export const getMovies = async(url)=>{
    try {
        const res = await axios.get(url);
        if(res.data.leght > 2){
            return {
                infantil: res?.data.filter((item)=> item.Type == "Infantil"),
                adult: res?.data.filter((item)=> item.Type == "Adulto"),
            };
        }
        return res.data;
        
    } catch (error) {
        console.error("ERROR: " + error);
        return [];
    }
}