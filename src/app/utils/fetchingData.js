const { baseUrl } = require("./formValidator")

export const getBlogs = async(type) =>{
    try {
        let url;
        if(type){
            url =`${baseUrl}/blogs?type=${type}`
        }else{
            url = `${baseUrl}/blogs`
        }
        const response = await fetch(url,{ next: { revalidate: 600 } });
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error);
    }
}



export const shuffle = function(v){
   

    for(let j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};