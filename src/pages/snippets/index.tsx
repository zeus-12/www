import SnippetCard from '@/components/SnippetCard';
import SlideUpWhenVisible from '@/hooks/SlideUpWhenVisible';
import { allSnippets } from 'contentlayer/generated';

const Library = () => {
  return (
    <SlideUpWhenVisible>
      <div className='pt-8 px-8 lg:px-24 lg:py-16'>
        <p className='text-3xl lg:text-5xl lg:mb-2 font-semibold tracking-tight'>
          Snippets
        </p>
        <p className='text-gray-400'>
          A collection of code snippets that I put for easy access. Feel free to
          reuse!
        </p>

        <div
          className='grid gap-2 w-full mt-4'
          style={{
            gridTemplateColumns:
              'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
          }}
        >
          {allSnippets?.map((snippet) => (
            <SnippetCard
              slug={snippet.slug}
              key={snippet.title}
              techStack={snippet.techStack}
              title={snippet.title}
              description={snippet.description}
            />
          ))}
        </div>
      </div>
    </SlideUpWhenVisible>
  );
};
export default Library;
