import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
			name: 'kind',
			title: 'kind',
			type: 'string',
			options: {
				list: [
					{ title: 'Snacks', value: 'snacks' },
					{ title: 'Mains', value: 'mains' },
				],
			},
			hidden: true,
		}),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
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
      price: 'price',
      image: 'image',
    },
    prepare(selection) {
      const { title, price, image } = selection;
      return {
        title: title,
        subtitle: `Price: ${price}`,
        media: image,
      };
    },
  }
});