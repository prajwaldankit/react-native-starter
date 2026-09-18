# React Native Starter

A template repository for starting new mobile apps with [Expo](https://expo.dev) SDK 57, TypeScript, Expo Router and NativeWind. Click **Use this template** on GitHub (or clone and re-initialize git) to start a new project from it.

## What's included

- [Expo](https://docs.expo.dev/versions/v57.0.0/) SDK 57 with [Expo Router](https://docs.expo.dev/router/introduction) for file-based routing
- TypeScript in strict mode, with an `@/*` path alias for `src/*`
- [NativeWind](https://www.nativewind.dev) (Tailwind CSS v3) for styling, with light and dark theme colors
- ESLint via `expo lint`
- Prettier with the Tailwind class-sorting plugin
- [pnpm](https://pnpm.io) as the package manager
- [AGENTS.md](AGENTS.md) with project conventions for contributors and AI coding agents

## Using this template

1. Create a new repository from this template.
2. Rename the app in [app.json](app.json): `name`, `slug` and `scheme`. Also update `name` in [package.json](package.json).
3. Replace the icons and splash assets in [assets/](assets).
4. Add app identifiers (`ios.bundleIdentifier` and `android.package`) to [app.json](app.json) before building for a store. They aren't set in the template.
5. Replace this README with your own.

## Get started

1. Install dependencies

   ```bash
   pnpm install
   ```

2. Start the app

   ```bash
   pnpm start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Scripts

| Command              | Description                         |
| -------------------- | ----------------------------------- |
| `pnpm start`         | Start the Expo dev server           |
| `pnpm android`       | Start and open on Android           |
| `pnpm ios`           | Start and open on iOS               |
| `pnpm web`           | Start and open on web               |
| `pnpm lint`          | Lint with ESLint (`expo lint`)      |
| `pnpm format`        | Format all files with Prettier      |
| `pnpm format:check`  | Check formatting without writing    |
| `pnpm reset-project` | Remove the demo screens (see below) |

Run the type checker with `pnpm exec tsc --noEmit`.

## Project structure

```text
src/
├── app/          # Routes (Expo Router). Keep screens and layouts only.
├── components/   # Reusable components; ui/ holds generic building blocks
├── constants/    # Theme values
├── hooks/        # Custom hooks (e.g. useTheme, useColorScheme)
└── global.css    # Tailwind entry and theme CSS variables
assets/           # Images, icons and fonts
scripts/          # Project scripts (reset-project)
```

Put application code in `src/` and keep `src/app/` for routes only. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Removing the demo content

The starter ships with example screens and components. When you're ready to build your own, run:

```bash
pnpm reset-project
```

This moves the starter code to the **example** directory (or deletes it, if you choose) and creates a blank **src/app** directory where you can start developing.

## Adding dependencies

Use Expo's installer for Expo-compatible packages so versions match SDK 57:

```bash
pnpm exec expo install <package>
```

Use `pnpm add <package>` for plain JavaScript/TypeScript packages. Don't use npm or yarn, and don't commit other lockfiles; the repository uses `pnpm-lock.yaml`.

## Learn more

- [Expo SDK 57 documentation](https://docs.expo.dev/versions/v57.0.0/)
- [Expo Router](https://docs.expo.dev/router/introduction)
- [NativeWind](https://www.nativewind.dev)
- [Using ESLint and Prettier](https://docs.expo.dev/guides/using-eslint/)
- [Unit Testing with Jest](https://docs.expo.dev/develop/unit-testing/)
- [Using TypeScript](https://docs.expo.dev/guides/typescript/)
