import { getBlogs } from "@/utils/loadData";
import Blog from "./Blog";

const Blogs = async () => {
  // get all blogs data in server side
  const blogs = await getBlogs("https://jsonplaceholder.typicode.com/posts");

  return (
    <div class="bg-white font-[sans-serif] my-16">
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
            LATEST BLOGS
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
          {blogs?.slice(0, 10)?.map((blog, idx) => (
            <Blog blog={blog} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
