import { groq } from 'next-sanity'

export const getGlobal = groq`*[_type == "global"]{
  _id,
  _createdAt,
  title,
  seo {
    ...,
    shareGraphic {
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
        url,
        metadata
      },
    },
  },
}`
