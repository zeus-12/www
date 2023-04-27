import Image from "next/image";

const PageDoesntExist = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        minHeight: `calc(100vh - 4rem)`,
      }}
    >
      <Image src="/404.svg" width="600" height="500" alt="Page not found!" />
    </div>
  );
};

export default PageDoesntExist;
