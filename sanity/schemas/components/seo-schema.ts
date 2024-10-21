import { defineField, defineType } from 'sanity';
import { SanityDocument } from '@sanity/types';


export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'document',
  options: {
		collapsible: true,
    collapsed: true,
	},
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      initialValue: (parent: SanityDocument) => (parent?.title as string) || '',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'shareGraphic',
      title: 'Meta Image',
      type: 'image',
    }),
  ],
});