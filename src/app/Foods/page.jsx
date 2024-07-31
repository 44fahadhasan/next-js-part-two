import Food from "@/components/ClientComponents/Food";

// static meta data
export const metadata = {
  title: {
    absolute: "all Clear Only me",
  },
  description: "Foods Page of the website",
};

const FoodsPage = () => {
  return (
    <>
      <div className="mt-12">
        <h1 className="text-4xl font-black text-center">
          Search Your Favorite Foods
        </h1>

        <Food />
      </div>
    </>
  );
};

export default FoodsPage;
