import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
			},
		}),
		defineField({
			name: 'seo',
			title: 'SEO',
			type: 'seo',
		}),
	],
	preview: {
		select: {
			title: 'title',
			slug: 'slug.current',
			trash: 'deletionRequested',
		},
		prepare(selection) {
			const { title, slug, trash } = selection
			return {
				title: trash ? `🛑 ${title}` : title,
				subtitle: `${slug === 'home' ? 'Home Page' : ''}`,
			}
		},
	},
})
