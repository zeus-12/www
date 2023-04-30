import { useRouter } from "next/router";

const Snippet = () => {
  const router = useRouter();
  return <div>project {router.query.slug}</div>;
};
export default Snippet;
