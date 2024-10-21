import { BasketIcon } from '@sanity/icons'
import {
	GiBubblingBowl,
	GiMeat,
} from 'react-icons/gi'

const Menu = (S, context) => {
	return S.listItem()
		.title('Menu')
		.icon(BasketIcon)
		.child(
			S.list()
				.title('Food')
				.items([
					S.listItem()
						.title('Snacks')
						.icon(GiBubblingBowl)
						.child(
							S.documentList()
								.title('Snacks')
								.schemaType('menu')
								.filter('_type == "menu" && kind == "snacks"')
								.initialValueTemplates(
									S.initialValueTemplateItem('menu-match', {
										value: 'snacks',
									}),
								),
						),
					S.listItem()
						.title('Mains')
						.icon(GiMeat)
						.child(
							S.documentList()
								.title('Mains')
								.schemaType('menu')
								.filter('_type == "menu" && kind == "mains"')
								.initialValueTemplates(
									S.initialValueTemplateItem('menu-match', {
										value: 'mains',
									}),
								),
						),
				]),
		)
}

export default Menu
