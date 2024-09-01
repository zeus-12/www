import { useRouter } from "next/router";

const ProjectDetails = () => {
  const router = useRouter();
  let { slug } = router.query;

  return (
    <div className="flex justify-center">
      <p className="text-2xl font-semibold">
        Project Description in works! uwu 💚
      </p>
    </div>
  );
};
export default ProjectDetails;
