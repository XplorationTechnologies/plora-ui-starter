# Plora UI Starter Template

This project was generated using the official [Nuxt UI Starter](https://nuxt.new/) and has been enhanced with additional dependencies and configurations to support rapid development with Nuxt 3. Designed for flexibility, it serves as a solid foundation for building applications within the **Plora** organization.

Refer to the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) for additional guidance.

## Features

- **Nuxt 3 Framework**: Built on Nuxt 3 for modern, modular web development
- **Integrated Modules**:
  - `@nuxt/ui`: Nuxt UI components
  - `@pinia/nuxt`: State management using Pinia
  - `@sidebase/nuxt-auth`: Authentication support
- **Development Tools**:
  - ESLint for code linting and formatting
  - Full TypeScript support with type checking via `vue-tsc`

## Setup

To get started, install the necessary dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Run the development server at `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Preview the production build locally:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

For deployment information, refer to the [deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Additional Scripts

This template includes several useful scripts:

- **Linting**: `pnpm lint` - Runs ESLint to identify and fix issues in the codebase.
- **Code Formatting**: `pnpm format` - Automatically formats code based on ESLint configuration.
- **Type Checking**: `pnpm typecheck` - Runs type checking with `vue-tsc` and `nuxi`.

## License

This is under the [MIT License](LICENSE).
