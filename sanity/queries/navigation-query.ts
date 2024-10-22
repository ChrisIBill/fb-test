import { groq } from 'next-sanity'

export const getNavigation = groq`
  *[_type == "navigation"]{
    title,
    navItems[] {
      title,
      page-> {
        slug {
          current
        }
      },
    }
  }
`
