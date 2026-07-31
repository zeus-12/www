import { Project, PROJECTS_DATA, slugifyProject } from "@/lib/projects";
import {
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { NextSeo } from "next-seo";

const ProjectDetails: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ project }) => {
  return (
    <>
      <NextSeo
        title={project.title}
        description={project.shortDescription}
        canonical={`https://vishnuu.com/projects/${slugifyProject(project.title)}`}
      />
      <div className="flex justify-center">
        <p className="text-2xl font-semibold">
          Project Description in works! uwu 💚
        </p>
      </div>
    </>
  );
};
export default ProjectDetails;

export async function getStaticPaths() {
  return {
    paths: PROJECTS_DATA.map((project) => ({
      params: { slug: slugifyProject(project.title) },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<{ project: Project }>> {
  const project = PROJECTS_DATA.find(
    (project) => slugifyProject(project.title) === params?.slug,
  );

  if (!project) return { notFound: true };

  return { props: { project } };
}
