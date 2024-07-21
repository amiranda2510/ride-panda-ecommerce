This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Instructions

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About the project

This is an ecommerce landing page that uses fakestore API. 

Technologies used:

- NextJS 14
- Typescript
- Tailwind CSS
- NextUI, ShadcnUI

Design structured:
- This projects use dynamic routes to generate a view for each product consulted.
- Search bar and pagination are client components, so they respond to user interaction by declaring ‘use client’.
- The common folder is created to include different files reused trough all the application.
- Query and Page params are set by the search bar and pagination component accordingly. These components modify the url params in order to filter and render the information required by the user.
- Pagination was made manually since there was no pagination framework available to use. Here the list of all products was segmented and shown as specified in the code.
- For image optimization, Nextjs offers the component Image that includes this behavior by deafult, that's why this was the component used for images. 
