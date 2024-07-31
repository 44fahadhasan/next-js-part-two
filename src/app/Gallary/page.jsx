import Image from "next/image";

import img from "../../../public/img.jpg";

export const metadata = {
  title: "Gallary",
  description: "this is gallary page of the website",
};

const page = () => {
  return (
    <div className="mt-12">
      <h2 className="text-4xl text-center font-black">Image Gallery</h2>

      <div className="mt-10">
        {/* <img src="/img.jpg" alt="img" /> */}

        <Image src={img} alt="Picture" />
      </div>
    </div>
  );
};

export default page;
