import Image from "next/image";
import TagLine from "../TagLine";

const SocialBlog = () => {
    const blogs = [
        "/images/social_blog/1.jpg",
        "/images/social_blog/2.jpg",
        "/images/social_blog/3.jpg",
        "/images/social_blog/4.jpg",
        "/images/social_blog/5.jpg",
        "/images/social_blog/6.jpg",
    ]
    return (
        <div className="mb-6">
            <TagLine sub="SOCIAL" title="Check out what’s trending"/>

            <section className="container grid md:grid-cols-3 grid-cols-1 gap-6">
                    {
                        blogs.map(blog => <div key={blog} className="max-w-72 max-h-72 overflow-hidden rounded-md shadow-lg">
                                <Image src={blog} alt="blog" width={150} height={150} className="w-full h-auto object-cover"/>
                        </div>)
                    }
            </section>
        </div>
    );
};

export default SocialBlog;