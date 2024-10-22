import { groq } from 'next-sanity'

export const getFeaturedItem = groq`*[_type == "page" && slug.current == "home"][0]{
  "featuredItem": featuredItem -> {
    _id,
    _createdAt,
    _updatedAt,
    title,
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
  },
}`
