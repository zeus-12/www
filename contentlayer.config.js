import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Snippets = defineDocumentType(() => ({
  name: "Snippets",
  filePathPattern: `snippets/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the snippet",
      required: true,
    },
    techStack: {
      type: "list",
      of: {
        type: "string",
      },
      description: "The tech stacks used in the snippet",
      required: false,
    },
    description: {
      type: "string",
      description: "The description of the snippet",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/library/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Snippets],
});
