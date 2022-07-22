import Image from "next/image";

const PageDoesntExist = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        minHeight: `calc(100vh - 4rem)`,
      }}
    >
      <Image src="/404.svg" width="600px" height="500px" />
    </div>
  );
};

export default PageDoesntExist;
