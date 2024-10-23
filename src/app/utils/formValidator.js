
export const baseUrl = process.env.baseUrl;

// blog Post Submit function

export const submitBlogPost = async (data) =>{
        try {
            const {title,type,imgFile,hotNews,details} = data;
            
                
            const imagePath = await uploadImageToImgBB(imgFile)
            if(!imagePath){
                    return {status:false, message:"Image can't post right now "}
            }
            const blogData = {title,type,image:imagePath,hotNews,details};
           

            const response = await fetch(`${baseUrl}/blogs/create`,{
                method:"POST",
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify(blogData)
            })
            if(!response.ok){
                return {status:false, message:"blog can't post right now "}
                
            }else{
                const result = await response.json();
                return result ;
            }
           

        } catch (error) {
            console.log(error);
            return {status:false, message:error.message}
        }
}
export const submitAwardPost = async (data) =>{
        try {
             const {imgFile,details,type,hotNews,socialLink} = data;
            const awardData = {image:imgFile,details,type,hotNews,socialLink};

        } catch (error) {
            console.log(error);
        }
}
export const submitSocialPost = async (data) =>{
            try {
                const {imgFile,hotNews,social_link, title,type} = data;

                const imagePath = await uploadImageToImgBB(imgFile)
            if(!imagePath){
                    return {status:false, message:"Image can't post right now "}
            }

            const socialData = {image:imagePath,hotNews,social_link,title,type};

            const response = await fetch(`${baseUrl}/socials/posts`,{
                method:"POST",
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify(socialData)
            })
            if(!response.ok){
                    console.log(response);
                return {status:false, message:" can't post social right now "}
                
            }else{
                const result = await response.json();
                return result ;
            }

        } catch (error) {
            console.log(error);
            return {status:false, message:error.message}
        }
}


// customer form submit form function

export const submitCustomerForm = async (data) =>{
            try {
                const response = await fetch(`${baseUrl}/customers`,{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(data)
                });
                const result = response.json();
                    return result;
            } catch (error) {
                console.log(error);
            }
}



async function uploadImageToImgBB(imageFile) {
    const apiKey = process.env.imgbbKey; // Replace with your ImgBB API key
    const url = 'https://api.imgbb.com/1/upload';

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        const response = await fetch(`${url}?key=${apiKey}`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to upload image');
        }

        const data = await response.json();
        return data.data.url; // Return the image URL
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}