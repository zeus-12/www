import Link from "next/link";

const Resume = () => {
  return (
    <div className="min-h-[92vh] flex items-center justify-center">
      <p className="text-4xl">
        Redirect to{" "}
        <Link passHref href="/resume.pdf">
          <p className="text-cyan-400 inline hover:cursor-pointer">Resume</p>
        </Link>
      </p>
    </div>
  );
};
export async function getServerSideProps(context) {
  return {
    redirect: {
      permanent: false,
      destination: "/resume.pdf",
    },
    props: {},
  };
}

export default Resume;
