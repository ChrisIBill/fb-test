import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'location',
	title: 'Location',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			rows: 6,
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'defaultImage',
		}),
	],
	preview: {
		select: {
			title: 'title',
			image: 'image',
		},
		prepare(selection) {
			const { title, image } = selection
			return {
				title: title,
				media: image,
			}
		},
	},
})
