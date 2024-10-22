import { PinIcon } from '@sanity/icons'

const Location = (S, context) => {
	return S.listItem()
		.title('Locations')
		.icon(PinIcon)
		.child(
			S.documentList()
				.title('Locations')
				.menuItems(S.documentTypeList('location').getMenuItems())
				.filter('_type == "location"')
				.defaultOrdering([{ field: '_createdAt', direction: 'desc' }]),
		)
}

export default Location
