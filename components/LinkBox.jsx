import Link from "next/link";

const LinkBox = (props) => {
  return (
    <Link href={props.link} passHref={true}>
      <div className="cursor-pointer inline-flex gap-1 items-center px-2 py-1 rounded-md bg-gray-900 hover:bg-gray-700">
        {props.children} <span>{props.title}</span>
      </div>
    </Link>
  );
};

export default LinkBox;
