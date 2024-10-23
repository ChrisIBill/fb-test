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

### FINISHED

Also formatted using pre-packaged format command

## Second task - Fix the bug

With the development server running, navigation to /menu and fix the render error. Ensure it passes `pnpm run build` and commit those changes.

### FINISHED

For long-term development, I do think ideally components directly handling server data are all wrapped up in
error boundaries, either custom built, imported from a library such as `react-error-boundary` or are structured
to use and take advantage of the nextjs style of error pages. For a short and simple example though, conditionally rendering a fallback image component felt like the best solution. I also considered making the
fallback image itself a sanity field but decided against this, at least for now. Without a hard-coded fallback
image, if an actual server error occurs, a static fallback is needed, so without a broader error boundary,
this seemed like the best solution.

Also couldn't decide if some degree of validation on studio side would be important, opted for a simple warning, as I could imagine brand new menu items that don't yet have an image being desired.

## Third task - Render Locations

On the Locations page we need to see a list of all locations. We want you to accomplish a few things.

1. Define an image field on the locations schema then make a preview, define its type, and create a query file.
2. Query locations on the locations file in the /app folder and pass that data to the locations component.
3. Render the locations in a list showing all available fields. No need to create separate pages for each location but be sure to use the SanityImage component.

### FINISHED

Fairly straight-forward! I usually go to some length to maintain consistency in a code base, and as this problem effectively already had been done on the menu component, just semi-copying the architecture seemed like the best solution.

## Fourth Task - Render a Menu Item inside a client component

On the home page we would like to feature 1 menu item.

1. Create a single menu item reference on Sanity for only the home page. Then create its type and add it to the query file.
2. IMPORTANT: Instead of querying the data on page.tsx, we want you to query the item directly in a separate client component. Remember your React Hooks. Build out that component and render it to the home page.

### FINISHED

Fairly straight-forward! If more time/a design team, definitely could make the component a little nicer, but with the current design of the home page/site as a whole, current component works well. Maybe some kind of filler component if there's no featured item would be nice. I also opted for an entirely vanilla component, as I usually try to be at least a little careful around adding new dependencies.

## Extra Credit - Create a drop down that selects and updates the preferred location.

Create a dropdown on the home page that selects and updates the preferred location. The component has already been started under select-location and includes the correct imports. Use context/location.tsx & helpers folder for reference. The final component should render all fields of the selected location on the home page and update when a new location is selected.

### FINISHED

I opted for a fairly crude solution based on conditional rendering based on if location is passed or not. Certainly the quick solution, but also given that the headers themselves are rendered on the pages rather than global layout, and this component was solely desired to be on the home page, it also felt like a good fit. Given more time, I'd probably try to make this a dynamic block, and allow it to be added to any page that its added to in the studio.

## Notables

- Mobile View is optional
- Use `pnpm run build` to test the build or for troubleshooting errors. Project has to pass the build in order to be accepted.
- Console logs show in the terminal for server components and in the browser for client components.
