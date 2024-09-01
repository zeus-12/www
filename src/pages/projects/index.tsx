import { TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS_DATA } from '@/configs/projects';
import SlideUpWhenVisible from '@/hooks/SlideUpWhenVisible';
import { NextSeo } from 'next-seo';

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
      <NextSeo
        title='Projects'
        description="A collection of projects that I've worked on."
      />
      <div className='pt-8 px-4 lg:px-24 lg:py-16 pb-8'>
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

        <div className='mb-4 mt-8'>
          {projects.length > 0 ? (
            <div className='lg:columns-3 sm:columns-2 gap-4 mb-2'>
              {projects.map((project) => (
                <div key={project.title}>
                  <ProjectCard
                    shortDescription={project.shortDescription}
                    isFeatured={project.isFeatured}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    deployedLink={project.deployedLink}
                    githubLink={project.githubLink}
                    techStack={project.techStack}
                  />
                </div>
              ))}
            </div>
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
