import { CollectionConfig, Block } from "payload/types";

// const Posts: CollectionConfig = {
//   slug: "posts",
//   auth: false,
//   fields: [],
// };

const QuoteBlock: Block = {
  slug: "Quote", // required
  imageURL: "https://google.com/path/to/image.jpg",
  imageAltText: "A nice thumbnail image to show what this block looks like",
  interfaceName: "QuoteBlock", // optional
  fields: [
    // required
    {
      name: "quoteHeader",
      type: "text",
      required: true,
    },
    {
      name: "quoteText",
      type: "text",
    },
  ],
};

export const Posts: CollectionConfig = {
  slug: "example-collection",
  fields: [
    {
      name: "layout", // required
      type: "blocks", // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        QuoteBlock,
      ],
    },
  ],
};
export default Posts;
