import { SiGithub } from 'react-icons/si';
import { MdPreview } from 'react-icons/md';
import { Card, Badge, Tooltip } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import SlideUpWhenVisible from '@/hooks/SlideUpWhenVisible';
import { fontMono } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { PROJECTS_DATA } from '@/configs/projects';
import { FC } from 'react';

type ProjectCardProps = (typeof PROJECTS_DATA)[number];

const ProjectCard: FC<ProjectCardProps> = ({
  deployedLink,
  githubLink,
  description,
  shortDescription,
  title,
  imageSrc,
  techStack,
}) => {
  return (
    <div className='bg-slate-900 border-[1px] border-gray-800 p-0 text-white hover:scale-[102%] transition-all duration-200'>
      <SlideUpWhenVisible>
        <div className='relative rounded-md'>
          <Image
            src={imageSrc}
            className='w-full rounded-sm object-contain max-h-96'
            alt={title}
            width={400}
            height={400}
          />
        </div>
        <div className='px-2 pb-2'>
          <div className='p-1 font-semibold md:p-2 flex justify-between'>
            <p>{title}</p>
            <div className='flex items-center gap-x-2'>
              {githubLink && (
                <Link href={githubLink}>
                  <Tooltip
                    label='View source code'
                    color='dark'
                    position='bottom'
                    transitionProps={{
                      transition: 'scale-y',
                    }}
                    withArrow
                  >
                    <div>
                      <SiGithub className='w-5 hover:cursor-pointer h-5' />
                    </div>
                  </Tooltip>
                </Link>
              )}

              {deployedLink && (
                <Link href={deployedLink}>
                  <Tooltip
                    color='dark'
                    position='bottom'
                    withArrow
                    transitionProps={{
                      transition: 'scale-y',
                    }}
                    label='View deployed'
                  >
                    <div>
                      <MdPreview className='w-6 hover:cursor-pointer h-6' />
                    </div>
                  </Tooltip>
                </Link>
              )}
            </div>
          </div>
          <div className='mb-2 px-1 flex gap-2 flex-wrap md:px-2'>
            {techStack?.map((stack) => (
              <Badge color={stack.color} variant='light' key={stack.title}>
                {stack.title}
              </Badge>
            ))}
          </div>

          <p
            className={cn(
              'text-sm text-gray-400 p-1 md:p-2 text-ellipsis',
              fontMono.className
            )}
          >
            {shortDescription}
          </p>
        </div>
      </SlideUpWhenVisible>
    </div>
  );
};

export default ProjectCard;
