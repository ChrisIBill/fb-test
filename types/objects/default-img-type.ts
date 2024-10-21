export type DefaultImageType = {
	alt: string
	caption: string
	sliderHeader: string
	sliderSubHeader: string
	asset: {
		_ref: string
		_type: string
		url: string
		metadata: {
			dimensions: {
				aspectRatio: number
				height: number
				width: number
			}
		}
	}
	hotspot: {
		_type: string
		height: number
		width: number
		x: number
		y: number
	}
	crop: {
		top: number
		bottom: number
		left: number
		right: number
	}
}
