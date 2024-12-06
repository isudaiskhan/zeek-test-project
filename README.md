This is a **template** for both **web** and **dashboard**.

## Install Packages

```bash
npm install
# or
yarn
```

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load font, a custom Google Font.

## Project Structure

- public
- src
  - app
  - components (_all components_)
  - enums (_enums related to project_)
  - redux (_store and slices_)
  - routes (_routes file according to user_)
    - routes.js
    - admin.js
  - services (_api files_)
    - users.js
    - auth.js
  - styles (_global styles and css variables_)
    - colors.module.scss
  - theme (_control project/library theme_)
  - utils (_helper functions, custom hooks, schema validations_)
  - middleware.js (_control requests and protect routes based on auth and user roles_)
- env.local (_holds secret variables_)
- tailwind.config.js

## Packages

- mui v6 and mui icons
- aceternity UI
- tailwind
- framer-motion
- next-shield
- @tanstack/react-query
- axios
- @reduxjs/toolkit
- dayjs
- sonner (notifications)
- yup (form validation)
