import { SeoType } from '../components/seo-type'

export type PageType = {
	_id: string
	_createdAt: Date
	_updatedAt: Date
	texturedBackground: boolean
	title: string
	slug: {
		current: string
	}
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
