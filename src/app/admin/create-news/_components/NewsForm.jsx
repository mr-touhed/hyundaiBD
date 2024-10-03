"use client"

import { ShowAlert } from "@/app/utils/alert";
import { submitBlogPost } from "@/app/utils/formValidator";
import { useState } from "react";

const NewsForm = () => {
    const [error,seterror] = useState('');
    const [loading,setLoading] = useState(false);
    const [formValue,setFormValue] = useState({
        title:"", 
        type:'',
        hotNews:false,
        details:"",
        imgFile:null,
        social_link:""

    })
    const handel_add_imageFile = (e) =>{
        const file = e.target.files[0];
        setFormValue( prev => ({...prev, imgFile:file}))
        
    }
    const handel_get_inputValue = (e) =>{
        setFormValue( prev => ({...prev, [e.target.name]:e.target.value}))
    }
    const handle_hotNews_status = () =>{
        setFormValue( prev => ({...prev, hotNews: !formValue.hotNews}))
        console.log(formValue);
           
    }

    const handleForm_submit = async (e) =>{
        e.preventDefault();
               try {
                setLoading (true)
                if(false){
                            /// about social media post 
                }else{
                    {
                        const result = await submitBlogPost(formValue);
                        if(result.status){
                            setLoading (false)
                            ShowAlert(true, result.message)
                            setFormValue({
                                title:"", 
                                type:'',
                                hotNews:false,
                                details:"",
                                imgFile:null,
                                social_link:""
                        
                            })
                        }else{
                            setLoading (false)
                            ShowAlert(false, result.message)
                        }
                    }
                }
               } catch (error) {
                    setLoading (false)
                        ShowAlert(false, result.message)
                    
               }
        
    }

    return (
        <form className="w-full flex flex-col gap-3" onSubmit={handleForm_submit}>
                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="title" className="text-sm">News Title</label>
                    <input required onChange={(e)=>handel_get_inputValue(e)} value={formValue.title} type="text" id="title" name="title" placeholder="News Post Title"  className="border rounded-md border-[#c2c0c0] outline-1 outline-[#aba8a8] px-2 py-1" />
                </div>
                <div className="grid grid-cols-[2fr_1fr] items-end gap-4">
                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="type" className="text-sm">News Type</label>
                    <select required onChange={(e)=>handel_get_inputValue(e)} value={formValue.type} type="text" id="type" name="type"  className="border rounded-md border-[#c2c0c0] outline-1 outline-[#aba8a8] px-2 py-1" >
                        <option disabled value="">Select</option>
                        <option value="Global News">Global News</option>
                        <option value="BD News">BD News</option>
                        <option value="Social Post">Social Post</option>
                        <option value="Award">Award</option>
                    </select>
                </div>

                <div className="flex gap-2 justify-center items-center">
                    
                    <input onChange={handle_hotNews_status} value={formValue.hotNews} checked={formValue.hotNews} type="checkbox" name="hotNews" id="hotNews " className="w-6 h-6 rounded-md"/>
                    <label htmlFor="hotNews" className="text-sm">Update News</label>
                </div>
                </div>
                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="title" className="text-sm">Details</label>
                    <textarea onChange={(e)=>handel_get_inputValue(e)} value={formValue.details} type="text" placeholder="Write Post Discription" id="details" name="details"  className="border rounded-md min-h-96 border-[#c2c0c0] outline-1 outline-[#aba8a8] px-2 py-1" />
                </div>

                {formValue.type !== 'Social Post' ?
                    <div className="flex flex-col w-full gap-1">
                    <label htmlFor="imgFile" className="text-sm">Image File</label>
                    <input required onChange={(e)=>handel_add_imageFile(e)} type="file" id="imgFile" name="imgFile"  className="border rounded-md border-[#c2c0c0] outline-1 outline-[#aba8a8] px-2 py-1" />
                </div>
                    :
                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="social_link" className="text-sm">Social Media Link</label>
                    <input onChange={(e)=>handel_get_inputValue(e)} value={formValue.social_link} type="url" id="social_link" name="social_link"  className="border rounded-md border-[#c2c0c0] outline-1 outline-[#aba8a8] px-2 py-1" />
                </div>
                }
                <button type="submit" className="px-16 py-2 bg-primary  text-[white] rounded-md mx-auto">{loading ? "Loading..." : "Submit"}</button>
        </form>
    );
};

export default NewsForm;