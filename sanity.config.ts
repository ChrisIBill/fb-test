/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { deskStructure } from './sanity/structure'
import { media } from 'sanity-plugin-media'
import WhiskeyCakeLogo from './components/logo'
import { dataset, projectId } from './sanity/env'
import schemas from '@/sanity/schemas'
import templates from '@/sanity/templates'

export default defineConfig({
	basePath: '/studio',
	title: 'Whiskey Cake',
	projectId,
	dataset,
	icon: WhiskeyCakeLogo,
	
	// Add and edit the content schema in the './sanity/schema' folder
	schema: {
		types: schemas,
		templates: templates,
	},
	plugins: [
		structureTool({
			structure: deskStructure
		}),
		// Vision is a tool that lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool(),
		media(),
	],
	// studio: {
	//   components: {
	//     logo: CompanyLogo,
	//   },
	// },
})
