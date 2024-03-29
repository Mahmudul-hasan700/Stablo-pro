export default {
  name: "post",
  title: "Post",
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString()
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "excerpt",
      title: "Excerpt",
      description:
        "The excerpt is used in blog feeds, and also for search results",
      type: "text",
      rows: 3,
      validation: Rule => Rule.max(200)
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" }
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility."
        }
      ],
      options: {
        hotspot: true
      }
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    },
    {
      name: "featured",
      title: "Mark as Featured",
      type: "boolean"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    },
    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          description: "SEO title for the post"
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          description: "SEO description for the post",
          rows: 3
        },
        {
          name: "metaKeywords",
          title: "Meta Keywords",
          type: "array",
          of: [{ type: "string" }],
          description: "SEO keywords for the post"
        },
        {
          name: "canonicalUrl",
          title: "Canonical URL",
          type: "url",
          description: "Canonical URL for the post"
        },
        // Open Graph (OG) meta tags
        {
          name: "ogTitle",
          title: "Open Graph Title",
          type: "string",
          description:
            "Title for Open Graph sharing (Facebook, LinkedIn)"
        },
        {
          name: "ogDescription",
          title: "Open Graph Description",
          type: "text",
          rows: 3,
          description:
            "Description for Open Graph sharing (Facebook, LinkedIn)"
        },
        {
          name: "ogImage",
          title: "Open Graph Image",
          type: "image",
          description:
            "Image for Open Graph sharing (Facebook, LinkedIn)"
        },
        // Robots meta tag
        {
          name: "robots",
          title: "Robots Meta Tag",
          type: "string",
          description:
            "Specify directives for search engine indexing (e.g., 'noindex, nofollow')"
        }
      ]
    }
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
