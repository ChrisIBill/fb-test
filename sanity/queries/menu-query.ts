import { groq } from 'next-sanity'

export const getMenu = groq`*[_type == "menu"]{
  _id,
  _createdAt,
  _updatedAt,
  title,
  kind,
  description,
  price,
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
