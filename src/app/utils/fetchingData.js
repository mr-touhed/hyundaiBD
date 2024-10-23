import { blogs } from "../../../public/data/blogs";

const { baseUrl } = require("./formValidator")

// export const getBlogs = async(type) =>{
//     try {
//         let url;
//         if(type){
//             url =`${baseUrl}/blogs?type=${type}`
//         }else{
//             url = `${baseUrl}/blogs`
//         }
//         const response = await fetch(url,{ next: { revalidate: 600 } });
//         const result = await response.json();
//         return result
//     } catch (error) {
//         console.log(error);
//     }
// }
export const getBlogs = async(type) =>{
    try {
        let result;
        const data = blogs;
     
        if(type){
            const filter  = data.result.filter(blog => blog.type == type);
           
           return result= {result:filter}
        }else{
           return result = data
        }
        
    } catch (error) {
        console.log(error);
    }
}



// export const fetchingCustomerData = async (type) =>{
//     try {
//         const response = await fetch(`${baseUrl}/customers?type=${type}`,{cache:"no-cache"});
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }


// Test Drive

// Query








export const shuffle = function(v){
   

    for(let j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};