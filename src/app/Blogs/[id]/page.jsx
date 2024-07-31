import { getBlogs } from "@/utils/loadData";

// // static meta data
// export const metadata = {
//   title: "Blog Detais Page",
//   description: "this is blog deatils page",
// };

// dynamic meta data
export const generateMetadata = async ({ params, searchParams }) => {
  const postId = params?.id;

  // load post data
  const { title, body } = await getBlogs(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );

  return {
    // title: `Post Deails: ${postId} - ${title}`,
    title: {
      absolute: `Post Deails: ${postId} - ${title}`,
    },
    description: body,
    keywords: body?.split(" "),
  };
};

const BlogDeatilsPage = async ({ params }) => {
  // load single blog data in server side
  const { title, body } = await getBlogs(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );

  return (
    <div className="mt-11 max-w-5xl mx-auto">
      <h2 className="text-2xl text-center text-gray-950 font-bold">
        Blog Number: {params?.id}
      </h2>
      <h3 className="text-xl mt-4">Tittle: {title}</h3>
      <p className="text-base">Description: {body}</p>
    </div>
  );
};

export default BlogDeatilsPage;
