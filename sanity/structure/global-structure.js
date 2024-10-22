import { EarthGlobeIcon } from '@sanity/icons'
import { GiMegaphone, GiCog, GiFoodTruck } from 'react-icons/gi'

const Global = S => {
	return S.documentTypeListItem('global')
		.title('Org Settings')
		.icon(GiCog)
		.child(S.editor().id('global').schemaType('global').documentId('global'))
}

export default Global
