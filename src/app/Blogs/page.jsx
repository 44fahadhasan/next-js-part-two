import Blogs from "@/components/Blog/Blogs";

// static meta data
export const metadata = {
  title: "Blogs",
  description: "Blog page of the website",
};

const BlogsPage = () => {
  return (
    <div>
      <Blogs />
    </div>
  );
};

export default BlogsPage;
