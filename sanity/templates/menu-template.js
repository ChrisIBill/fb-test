const menuTemplate = {
	id: 'menu-match',
	title: 'Menu Match',
	schemaType: 'menu',
	value: params => ({
		// kind will be prefilled
		kind: params.value,
	}),
}

export default menuTemplate
