import { getBlogs } from "@/utils/loadData";

const HomePage = async () => {
  // const { currentTime } = await getBlogs("http://localhost:3000/api/time", {
  //   cache: "no-store",
  // });

  const { currentTime } = await getBlogs("http://localhost:3000/api/time", {
    next: { revalidate: 5 },
  });

  return (
    <div className="mt-12 text-xl">
      <h2>Home page that means root page of the website.</h2>

      <h3 className="text-center">
        Time :{currentTime} <time>{}</time>
      </h3>
    </div>
  );
};

export default HomePage;
