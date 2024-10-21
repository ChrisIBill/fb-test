This is a test Front Burner for new web developer hires. Node version for project is `v20.5.1`. Package manager is `pnpm`.

## Getting Started

First, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open [http://localhost:3000/studio](http://localhost:3000/studio) to see the Sanity Studio. 

## First task

Clone the repo and make sure its public on your Github profile.

## Second task - Fix the bug

With the development server running, navigation to /menu and fix the render error. Ensure it passes `pnpm run build` and commit those changes. 

## Third task - Render Locations

On the Locations page we need to see a list of all locations. We want you to accomplish a few things.

1) Define an image field on the locations schema then make a preview, define its type, and create a query file.
2) Query locations on the locations file in the /app folder and pass that data to the locations component.
3) Render the locations in a list showing all available fields. No need to create separate pages for each location but be sure to use the SanityImage component.


## Fourth Task - Render a Menu Item inside a client component

On the home page we would like to feature 1 menu item. 

1) Create a single menu item reference on Sanity for only the home page. Then create its type and add it to the query file. 
2) IMPORTANT: Instead of querying the data on page.tsx, we want you to query the item directly in a separate client component. Remember your React Hooks. Build out that component and render it to the home page. 

## Extra Credit - Create a drop down that selects and updates the preferred location. 

Create a dropdown on the home page that selects and updates the preferred location. The component has already been started under select-location and includes the correct imports. Use context/location.tsx & helpers folder for reference. The final component should render all fields of the selected location on the home page and update when a new location is selected.

## Notables

- Mobile View is optional
- Use `pnpm run build` to test the build or for troubleshooting errors. Project has to pass the build in order to be accepted.
- Console logs show in the terminal for server components and in the browser for client components.