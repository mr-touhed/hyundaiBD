import Image from "next/image";
import TagLine from "../TagLine";


const Blogs = () => {

    const blogs = [
        {
            img:"/images/blogs/1.jpg",
            brand:"BRAND",
            title:"Hyundai Calendar 2024"
        },
        {
            img:"/images/blogs/2.jpg",
            brand:"BRAND",
            title:"From Bean to Cup"
        },
        {
            img:"/images/blogs/3.jpg",
            brand:"BRAND",
            title:"Road to Sustainability travel vloggers"
        },
    ]
    return (
        <>
        <TagLine sub="WHAT’S NEW" title="See what’s happening"/>
            <div className="container my-8 grid md:grid-cols-3 ">
                    {
                        blogs.map(blog => <div key={blog.title} className="max-w-72 mx-auto overflow-hidden  ">
                                    <div className="w-auto h-80 overflow-hidden rounded-md">
                                        <Image  src={blog.img} alt="img" width={300} height={300} className="w-full h-auto object-cover"/>
                                    </div>
                                    <div className="mt-4">
                                        <p>{blog.brand}</p>
                                        <h4 className="font-semibold">{blog.title}</h4>
                                    </div>
                            </div>)
                    }
                        
            </div>
        </>
    );
};

export default Blogs;