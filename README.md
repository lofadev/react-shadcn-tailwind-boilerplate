# react-shadcn-tailwind-boilerplate

**react-shadcn-tailwind-boilerplate** is a boilerplate that uses **React**, **Tailwind CSS**, **Shadcn UI** and comes pre-configured with various useful libraries such as `axios`, `react-hook-form`, `zustand`, `zod`, etc. The goal is to help you quickly initialize a frontend project with an easily extensible architecture, strict linting rules, and consistent code style.

---

## Features

- **React 19 + Vite**: Uses the latest version of React with Vite for faster development, build, and hot reload.
- **Tailwind CSS**: Pre-configured with Tailwind CSS 4.x, allowing you to quickly and flexibly style your application.
- **ShadCN**: Includes some configurations and components inspired by [shadcn/ui](https://ui.shadcn.com/).
- **ESLint + Prettier**: Comes with ESLint and Prettier for standardized code style and to avoid syntax errors.
- **Husky + lint-staged**: Automatically runs linting and formatting before committing, ensuring a clean codebase.
- **axios**: A popular library for making API calls.
- **react-hook-form**: Efficient and easy form management.
- **zod**: Safe data parsing and validation.
- **zustand**: Lightweight, straightforward global state management.
- **React Router**: Routing for your application (version 7.x).
- **Sonner**: A lightweight toast/notification library.

---

## Technologies Used

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5.x
- [Vite](https://vitejs.dev/) 6.x
- [Tailwind CSS](https://tailwindcss.com/) 4.x
- [ESLint](https://eslint.org/) 9.x
- [Prettier](https://prettier.io/) 3.x
- [Husky](https://typicode.github.io/husky/#/) 9.x
- [lint-staged](https://github.com/okonet/lint-staged) 13.x

---

## Project Structure

This document describes the structure of the project directory and the purpose of each file/folder.

| Directory/File                  | Description                                        |
| ------------------------------- | -------------------------------------------------- |
| `.husky/`                       | Husky configuration (pre-commit hook)              |
| `.vscode/`                      | VSCode configuration (if any)                      |
| `node_modules/`                 | Directory for installed node packages              |
| `public/`                       | Contains static files (favicon, manifest, ...)     |
| `src/apis/`                     | API call functions (axios)                         |
| `src/assets/`                   | Images, media files, ...                           |
| `src/components/`               | Shared components                                  |
| `src/configs/`                  | Configurations, e.g., axios setup, ...             |
| `src/constants/`                | Contains constants, enums, ...                     |
| `src/layouts/`                  | Application's main layouts                         |
| `src/lib/`                      | Libraries, reusable helper functions               |
| `src/routes/`                   | Application routes (React Router)                  |
| `src/store/`                    | State management (zustand)                         |
| `src/utils/`                    | Utility functions, helper functions                |
| `src/App.tsx`                   | Root component of the application                  |
| `src/index.css`                 | Global CSS file (import tailwind)                  |
| `src/index.tsx`                 | Entry point for rendering React                    |
| `src/vite-env.d.ts`             | Type declarations for Vite                         |
| `.editorconfig`                 | Code formatting rules for multiple editors         |
| `.env`                          | Main environment variables (not committed to repo) |
| `.env.example`                  | Example .env file                                  |
| `.npmrc`                        | npm configuration                                  |
| `.nvmrc`                        | Specifies NodeJS version for the project           |
| `.prettierrc`                   | Prettier configuration                             |
| `eslint.config.js`              | ESLint configuration                               |
| `index.html`                    | Root HTML file for Vite                            |
| `package.json`                  | Project information and configuration              |
| `README.md`                     | Documentation and project description              |
| `tsconfig.json`                 | TypeScript configuration                           |
| `vite.config.ts`                | Vite configuration                                 |
| `yarn.lock / package-lock.json` | Lock file for dependencies                         |

## Clone repo:

```bash
git clone https://github.com/lofadev/react-shadcn-tailwind-boilerplate.git
```

## Node version:

```json
>= 22.x
```

## Install dependencies:

```bash
cd react-shadcn-tailwind-boilerplate
npm install
# or
yarn install
```

## Create a .env file (if necessary) based on .env.example:

```bash
cp .env.example .env
```

## Start the development server:

```bash
npm run dev
# or
yarn dev
```

## Build the project for production:

```bash
npm run build
# or
yarn build
```

## Preview the production build:

```bash
npm run start
# or
yarn start
```
