export const getCategories = (data)=>{
    return {
        infantil: data.filter((item)=> item.Type == "Infantil"),
        adult: data.filter((item)=> item.Type == "Adulto"),
    };
}