export const getBlogs = async (url, obj) => {
  const blogs = await fetch(url, obj);
  const data = await blogs.json();
  return data;
};
