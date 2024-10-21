const Pages = S => {
	return S.listItem()
		.title('Pages')
		.child(
			S.documentList()
				.title('Pages')
				.menuItems(S.documentTypeList('page').getMenuItems())
				.filter('_type == "page"')
				.defaultOrdering([{ field: '_createdAt', direction: 'desc' }]),
		)
}

export default Pages
