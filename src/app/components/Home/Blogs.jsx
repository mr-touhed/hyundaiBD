"use client";
import Image from "next/image";
import TagLine from "../TagLine";
import { useEffect, useState } from "react";
import { getBlogs, shuffle } from "@/app/utils/fetchingData";

const Blogs = () => {
  const [Loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const newsdataFetch = async () => {
      const data = await getBlogs();
      const hotNews = data.result.filter((news) => news.hotNews === true);
      setNews(hotNews);
      setLoading(false);
    };
    newsdataFetch();
  }, []);

  const blogs = [
    {
      img: "/images/blogs/1.jpg",
      brand: "BRAND",
      title: "Hyundai Calendar 2024",
    },
    {
      img: "/images/blogs/2.jpg",
      brand: "BRAND",
      title: "From Bean to Cup",
    },
    {
      img: "/images/blogs/3.jpg",
      brand: "BRAND",
      title: "Road to Sustainability travel vloggers",
    },
  ];
  return (
    <>
      <TagLine sub="WHAT’S NEW" title="See what’s happening" />
      {Loading ? (
        <div className="h-[80vh] grid place-content-center">
          <h3 className="text-2xl font-thin text-[#a2a2a2]">Loading......</h3>
        </div>
      ) : (
        <div className="container my-8 grid md:grid-cols-3 gap-6">
          {shuffle(news)
            ?.slice(0, 6)
            .map((blog) => (
              <div
                key={blog._id}
                className=" md:w-[350px] mx-auto w-full overflow-hidden  "
              >
                <div className="w-full h-[150px] overflow-hidden rounded-md">
                  <Image
                    src={blog.image}
                    alt="img"
                    width={1200}
                    height={1200}
                    className="w-full h-[150px] object-cover"
                  />
                </div>
                <div className="mt-4">
                  <p>BREND</p>
                  <h4 className="font-semibold">{blog.title}</h4>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Blogs;
