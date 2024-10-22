import { SeoType } from '../components/seo-type'
import { MenuType } from '@/types/documents/menu-type'

export type PageType = {
	_id: string
	_createdAt: Date
	_updatedAt: Date
	texturedBackground: boolean
	title: string
	slug: {
		current: string
	}
	featuredItem: MenuType
	seo: SeoType
	navigation: {
		title: string
		navItems: {
			title: string
			route: {
				slug: {
					current: string
				}
			}
		}[]
	}
}
