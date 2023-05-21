import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Snippet = defineDocumentType(() => ({
  name: 'Snippets',
  filePathPattern: `snippets/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the snippet',
      required: true,
    },
    techStack: {
      type: 'list',
      of: {
        type: 'string',
      },
      description: 'The tech stacks used in the snippet',
      required: false,
    },
    description: {
      type: 'string',
      description: 'The description of the snippet',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The slug of the post',
      required: true,
    },
  },
}));

const computedFields = {
  slug: {
    type: 'string',

    resolve: (doc) => `/${doc._raw.flattenedPath.split('/').at(-1)}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
};

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Snippet],
});
