export type NavigationType = {
	_id: string
	_createdAt: Date
	_updatedAt: Date
	title: string
  navItems: {
    title: string
    page: {
      slug: {
        current: string
      }
    }
  }[]
}
