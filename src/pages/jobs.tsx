import Seo from '@/components/Seo';
import SlideUpWhenVisible from '@/hooks/SlideUpWhenVisible';

const Jobs = () => {
  return (
    <>
      <Seo
        title='Work'
        description='My professional work experience as a software engineer.'
      />
      <div className='pt-8 px-4 lg:px-24 lg:py-16'>
        <SlideUpWhenVisible>
          <p className='text-3xl lg:text-5xl lg:mb-2 font-semibold tracking-tight'>
            Work Experience
          </p>
          <p className='text-gray-400'>
            My professional work experience as a software engineer.
          </p>
          wip xd
          <div className='mt-4'>
            {/* <WorkCard
              title='Software Engineer'
              company='Sage'
              date='July 2021 - Present'
              description='Working on the Sage 300cloud product as a full-stack developer.'
            /> */}
          </div>
        </SlideUpWhenVisible>
      </div>
    </>
  );
};
export default Jobs;
