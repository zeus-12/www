import { TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS_DATA } from '@/lib/constants';
import SlideUpWhenVisible from '@/hooks/SlideUpWhenVisible';
import Seo from '@/components/Seo';

const Projects = () => {
  const [query, setQuery] = useState('');

  const [projects, setProjects] = useState(PROJECTS_DATA);

  useEffect(() => {
    if (query.trim().length > 0) {
      const newProjectData = PROJECTS_DATA.filter((item) =>
        item.title.toUpperCase().includes(query.toUpperCase())
      );
      setProjects(newProjectData);
    } else {
      setProjects(PROJECTS_DATA);
    }
  }, [query]);

  return (
    <>
      <Seo
        title='Projects'
        description="A collection of projects that I've worked on."
      />
      <div className='pt-8 px-4 lg:px-24 lg:py-16'>
        <SlideUpWhenVisible>
          <p className='text-3xl lg:text-5xl lg:mb-2 font-semibold tracking-tight'>
            Projects
          </p>
          <p className='text-gray-400'>
            I love building projects and practice my coding skills. Here&apos;s
            a collection of things I&apos;ve built.
          </p>

          <TextInput
            className='mt-3 max-w-md'
            placeholder='Search projects'
            rightSection={<BiSearch />}
            type='text'
            value={query}
            onChange={(event) => setQuery(event.currentTarget.value)}
          />
        </SlideUpWhenVisible>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4 mt-8'>
          {projects.length > 0 ? (
            projects.map((project, idx) => {
              const evenIndexedProjects = projects.filter(
                (_, index) => index % 2 === 0
              );

              const oddIndexedProjects = projects.filter(
                (_, index) => index % 2 !== 0
              );

              return (
                <div key={idx}>
                  <ProjectCol projects={evenIndexedProjects} />
                  <ProjectCol projects={oddIndexedProjects} />
                </div>
              );
            })
          ) : (
            <p className='text-gray-400'>
              No projects matching the entered keyword.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;

const ProjectCol = ({ projects }: { projects: typeof PROJECTS_DATA }) => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          isFeatured={project.isFeatured}
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.imageSrc}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
          techStack={project.techStack}
        />
      ))}
    </div>
  );
};
