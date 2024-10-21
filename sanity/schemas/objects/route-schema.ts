import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'route',
	title: 'Route',
	type: 'object',
	options: {
		collapsible: true,
	},
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'page',
			title: 'Page',
			type: 'reference',
			to: [{ type: 'page' }],
		}),
	],
});