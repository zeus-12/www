import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";

export const Snippet = defineDocumentType(() => ({
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
    slug: computedFields.slug,
  },
}));

export const Other = defineDocumentType(() => ({
  name: "Other",
  filePathPattern: `other/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "Title",
      required: true,
    },
  },
  computedFields,
}));

export const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Snippet, Other],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeCodeTitles, rehypePrism],
  },
});
