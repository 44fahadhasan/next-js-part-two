import Image from "next/image";
import Link from "next/link";

const Blog = ({ blog: { id, title, body } }) => {
  return (
    <Link
      href={`Blogs/${id}`}
      class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300"
    >
      <Image
        src="https://picsum.photos/200/300"
        alt={`Blog Post Image ${id}`}
        class="object-cover"
        layout="responsive"
        width={300}
        height={200}
      />
      <div class="p-6">
        <h3 class="text-xl font-bold text-[#333]">{title?.slice(0, 30)}</h3>
        <hr class="my-6" />
        <p class="text-gray-400 text-sm">{body?.slice(0, 90)} ...</p>
      </div>
    </Link>
  );
};

export default Blog;
