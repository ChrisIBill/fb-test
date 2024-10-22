import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'navigation',
	title: 'Navigation',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'navItems',
			title: 'Navigation Items',
			type: 'array',
			of: [{ type: 'route' }],
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
	},
})
