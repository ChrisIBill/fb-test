import Global from './global-structure'
import Navigation from './navigation-structure'
import Menu from './menu-structure'
import Pages from './page-structure'
import Location from './location-structure'

export const deskStructure = (S, context) => {
	return S.list()
		.title('Content')
		.items([
			Location(S, context),
			Menu(S, context),
			Pages(S, context),
			Navigation(S, context),
			Global(S, context),
		])
}
