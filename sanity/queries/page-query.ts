import { groq } from 'next-sanity'

export const getPagePaths = groq`*[_type == "page" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`

export const getPage = groq`*[_type == "page" && slug.current == $slug][0]{
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
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
