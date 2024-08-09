import Image from "next/image";
import TagLine from "../TagLine";
import { FaInstagram } from "react-icons/fa6";
const SocialBlog = () => {
    const blogs = [
        {
            details:"Elevate your driving experience with Hyundai EXTER. Test drive today!",
            img:"/images/social_blog/1.jpg",
            link:'https://www.instagram.com/reel/C68oulXoJp5/?igsh=MThmaGx0dXlobmRsOA?hl=en&img_index=1'
        },
        {
            details:"Check out our exclusive gathering for the Hyundai IONIQ 5 family, filled with captivating conversations, gourmet delights & unforgettable camaraderie!",
            img:"/images/social_blog/2.jpg",
            link:'https://www.instagram.com/reel/C6_K3kuvr-J/?igsh=MWQ5aWUxb2RreTB1dQ?hl=en&img_index=1'
        },
        {
            details:"6 airbags as standard and 40+ advanced safety features elevate Hyundai EXTER’s safety to a whole new level. Test drive today!",
            img:"/images/social_blog/3.jpg",
            link:'https://www.instagram.com/reel/C7B0oCXJWsF/?igsh=MW9qd2xuamthcXFmYg%3Fhl%3Den&img_index=1'
        },
        {
            details:"Get ready for Episode 3 where Hyundai CRETA N Line races against a kayak. Watch the thrilling video to see who wins!",
            img:"/images/social_blog/4.jpg",
            link:'https://www.instagram.com/reel/C7ME1BeNKuv/?igsh=MTk2YmxycWNiOXJ3OA%3Fhl%3Den&img_index=1'
        },
        {
            details:"Meet Rigzin Tamchos, a decorated para-archer from Leh, Ladakh. His story is breaking barriers & redefining perceptions about people with disabilities. ",
            img:"/images/social_blog/5.jpg",
            link:'https://www.instagram.com/reel/C7JgEtOCxWG/?igsh=bTRuYjQzOXZhYmxm%3Fhl%3Den&img_index=1'
        },
        {
            details:"Discover the remarkable journey of Ira Singhal, the IAS topper of 2014, who overcame hyperkyphosis scoliosis to achieve her dreams.",
            img:"/images/social_blog/6.jpg",
            link:'https://www.instagram.com/reel/C7HBZZxAQyo/?igsh=MWR0NXB5NXY1cGlsag%3Fhl%3Den&img_index=1'
        },
        
       
    ]
    return (
        <div className="mb-6">
            <TagLine sub="SOCIAL" title="Check out what’s trending"/>

            <section className="container grid md:grid-cols-3 grid-cols-1 gap-4">
                    {
                        blogs.map((blog,i) => <a key={i} href={blog.link} className="group md:max-h-[400px] overflow-hidden rounded-md shadow-lg relative">
                                <Image src={blog.img} alt="blog" width={150} height={150} className="w-full h-auto object-cover"/>
                                <div className="absolute  bg-[#002c5fd0] group-hover:opacity-100 transition-all ease-out duration-500 md:h-[350px] top-0 left-0 m-4 rounded-md p-6 text-[white] text-xl md:pt-16 opacity-0">
                                        <p>{blog.details}</p>
                                        <br/>
                                        <FaInstagram />
                                </div>
                        </a>)
                    }
            </section>
        </div>
    );
};

export default SocialBlog;