export type SeoType = {
	metaTitle: string
	metaDesc: string
	shareGraphic: {
		alt: string
		caption: string
		crop: {
			top: number
			bottom: number
			left: number
			right: number
		}
		hotspot: {
			x: number
			y: number
			height: number
			width: number
		}
		asset: {
			_id: string
			_type: string
			url: string
		}
	}
}
