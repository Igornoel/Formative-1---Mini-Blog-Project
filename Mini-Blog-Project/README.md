# Dev Insights — Mini Blog

A small internal blog for sharing web-development tips, insights, and team updates. Built with React, TypeScript, and Vite.

## Run the project

1. Install dependencies: `npm install`
2. Start Vite: `npm run dev`
3. Open the local URL shown in the terminal.

Use `npm run build` to type-check and create a production build, and `npm run lint` to check code quality.

## Implementation notes

`App` composes a `Header` and `PostList`. `Post` is a reusable typed functional component: functional components are concise, work naturally with hooks, and suit this presentational UI better than a class component. `PostData` ensures every post has a consistent shape.

External CSS files provide the global tokens, responsive layout, and component styling, while a small inline style on the New Post link demonstrates the second styling method. Conditional JSX applies the `featured` card treatment and renders a **NEW** badge for recently published posts. The project also uses `React.memo` around `Post` and stable `id` keys when mapping posts to avoid unnecessary work. The `withLogger` higher-order component wraps `PostList` and logs mount/unmount lifecycle events to the browser console.

## Reflection

The main challenge was making a small amount of content feel intentional on both desktop and mobile. A simple content hierarchy, typed reusable post data, and a responsive grid made that manageable. This project reinforced how TypeScript and focused components make React interfaces easier to grow.

## Packages

No external UI or styling libraries were added. The project uses Vite, React, React DOM, TypeScript, and ESLint from the starter setup.
