import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'defaultImage',
	title: 'Image',
	type: 'image',
	options: {
		hotspot: true,
		metadata: ['lqip'],
		collapsible: true,
	},
	fields: [
		defineField({
			name: 'alt',
			title: 'Alternative Text',
			type: 'string',
			description: 'Important for accessibility and SEO',
			validation: Rule => Rule.required().error('Alternative text is required'),
		}),
	],
	preview: {
		select: {
			name: 'alt',
			image: 'asset',
		},
		prepare(selection) {
			const { name, image } = selection
			return {
				title: `${name ? name : 'No Alternative Text Provided'}`,
				media: image,
			}
		},
	},
	validation: Rule =>
		Rule.assetRequired().warning(
			'An image for menu items is important, but not required',
		),
})
