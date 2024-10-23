export const UpdateLocation = (location: any) => {
	const newLocationState = {
		_id: location._id,
		title: location.title,
		//NOTE: Unsure if bug or intentional, but location.seo doesn't exist in schema
		//description: location.seo.description,
		description: location.description,
		image: location.image,
	}

	return newLocationState
}
