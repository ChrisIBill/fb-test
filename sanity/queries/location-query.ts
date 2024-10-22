import { groq } from 'next-sanity'

export const getLocations = groq`*[_type == "location"]{
  _id,
  _createdAt,
  _updatedAt,
  title,
  description,
  image {
    alt,
    caption,
    crop {
      ...
    },
    hotspot {
      x,
      y
    },
    asset-> {
      ...,
      metadata
    },
  },
}`
