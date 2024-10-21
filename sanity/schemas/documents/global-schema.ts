import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'global',
  type: 'document',
  title: 'Global Settings',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Site Title',
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'seo',
    }),
  ],
});