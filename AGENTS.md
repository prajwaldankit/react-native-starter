# AGENTS.md

## Project Overview

This is a **React Native mobile application** built with:

- **Expo**
- **TypeScript**
- **Expo Router**
- **NativeWind** for Tailwind-style styling
- **React Native** components and APIs
- **ESLint**
- **Prettier**
- **pnpm** as the package manager

The project prioritizes:

1. Simple, maintainable code
2. Reusable components
3. Strong type safety
4. Consistent UI patterns
5. Mobile-first UX
6. Expo-compatible APIs and libraries
7. Small, focused changes
8. Accessibility
9. Reliable behavior on both iOS and Android

---

# Critical Rules

These rules are mandatory unless the project explicitly requires otherwise.

## 1. Read the Expo SDK Documentation Before Writing Code

Before writing or modifying code, read the exact versioned Expo documentation:

https://docs.expo.dev/versions/v57.0.0/

**Mandatory rule:** Read the exact versioned docs at `https://docs.expo.dev/versions/v57.0.0/` before writing any code.

Do not use documentation for another Expo SDK version when working on Expo APIs, configuration, packages, or behavior.

When implementing an Expo feature:

1. Check the SDK 57 documentation.
2. Check the existing project configuration.
3. Check the installed package version.
4. Follow the SDK 57-compatible API.

Do not guess Expo APIs from memory.

When Expo documentation and third-party documentation differ, prefer the version-specific Expo documentation for the project's SDK version.

---

## 2. Use pnpm

**pnpm is the required package manager.**

Use:

```bash
pnpm install
pnpm add <package>
pnpm remove <package>
pnpm update
```

Do not use `npm` or `yarn` unless the project explicitly requires them.

For Expo-compatible packages, use:

```bash
pnpm exec expo install <package>
```

Do not manually choose an Expo package version unless there is a project-specific reason.

The repository should use:

```text
pnpm-lock.yaml
```

Do not create or modify npm or yarn lockfiles.

If the repository currently contains a different package-manager lockfile, inspect the existing setup before changing it. Do not blindly delete lockfiles.

---

## 3. Inspect Before Changing

Before implementing a feature or fixing a bug:

- Inspect the existing project structure.
- Inspect relevant existing components.
- Inspect existing hooks and utilities.
- Inspect API and service patterns.
- Inspect navigation and route structure.
- Inspect package versions.
- Inspect existing styling conventions.
- Inspect existing configuration.
- Inspect existing tests.
- Reuse existing functionality where possible.

Do not create duplicate components, hooks, utilities, or services without first checking whether an equivalent already exists.

---

## 4. Keep Changes Focused

Make the **smallest reasonable change** that solves the task.

Do not:

- Perform unrelated refactors.
- Rename unrelated files.
- Reformat unrelated code.
- Replace existing libraries without a reason.
- Introduce unnecessary abstractions.
- Modify unrelated screens.

If a larger refactor is genuinely required, keep it clearly separated from the requested change.

---

## 5. Do Not Guess

Do not guess about:

- Expo APIs
- Expo SDK compatibility
- Package APIs
- Navigation paths
- Existing project conventions
- Environment variables
- API response shapes
- Configuration values

Inspect the project or consult the required documentation first.

---

# React Native Rules

This is a **React Native application**, not a React web application.

Use React Native components:

```tsx
import {
  View,
  Text,
  Pressable,
  ScrollView,
  FlatList,
  Image,
  TextInput,
} from "react-native";
```

Do **not** use HTML elements:

```tsx
<div />
<span />
<button />
<input />
<img />
```

Do not use browser-specific APIs unless the project explicitly supports them.

Avoid:

```text
window
document
localStorage
HTMLElement
```

Use React Native or Expo equivalents instead.

---

# TypeScript

All new application code must be written in TypeScript.

Prefer explicit, useful types:

```tsx
type UserCardProps = {
  name: string;
  email: string;
};

export function UserCard({ name, email }: UserCardProps) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
}
```

Avoid unnecessary `any`.

Prefer `unknown` when the type is genuinely unknown:

```tsx
function handleError(error: unknown) {
  // Narrow the value before using it.
}
```

Do not:

- Disable TypeScript errors to make code compile.
- Add `@ts-ignore` without a documented, necessary reason.
- Use `any` as a shortcut for typing problems.

Fix the underlying type issue whenever practical.

---

# Styling

## Tailwind / NativeWind

Use **NativeWind** and Tailwind-style utility classes for normal styling.

Prefer:

```tsx
<View className="flex-1 bg-white px-4">
  <Text className="text-2xl font-bold text-gray-900">Welcome</Text>
</View>
```

Avoid unnecessary `StyleSheet` usage for simple static styles.

Do not mix styling approaches unnecessarily.

## Use StyleSheet When Appropriate

`StyleSheet` is acceptable when:

- A style is dynamically calculated.
- A native API requires a style object.
- A third-party library requires styles.
- An animation requires complex style values.
- Tailwind utilities would become excessively complicated.

Example:

```tsx
const size = width * 0.5;

<Image
  source={image}
  style={{
    width: size,
    height: size,
  }}
/>;
```

## Styling Guidelines

Prefer readable utility classes:

```text
rounded-xl bg-white p-4 shadow-sm
```

Avoid excessively long utility strings.

Prefer common spacing values:

```text
p-2
p-3
p-4
p-5
p-6

gap-2
gap-3
gap-4
gap-6
```

Avoid arbitrary values unless they are actually necessary.

When the same visual pattern is repeatedly used, consider extracting a reusable component.

---

# Component Design

Components should be:

- Small
- Focused
- Reusable when appropriate
- Strongly typed
- Easy to test
- Easy to understand

Prefer:

```text
src/
└── components/
    ├── Button.tsx
    ├── Card.tsx
    ├── Input.tsx
    ├── Header.tsx
    └── LoadingSpinner.tsx
```

over putting everything into a single screen.

A screen should primarily compose components and coordinate screen-level behavior.

Do not create abstractions for every tiny piece of UI.

The goal is **useful reuse**, not abstraction for its own sake.

---

# Reusable Components

Create reusable components when a UI pattern:

- Appears more than once.
- Has meaningful behavior.
- Has a clear API.
- Would otherwise result in duplicated code.

Example:

```tsx
type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export function Button({ title, onPress, disabled = false }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className="rounded-xl bg-blue-600 px-4 py-3"
      accessibilityRole="button"
      accessibilityLabel={title}
    >
      <Text className="text-center font-semibold text-white">{title}</Text>
    </Pressable>
  );
}
```

Avoid creating generic components that make simple UI harder to understand.

---

# Expo

Use Expo APIs whenever Expo already provides the required functionality.

Before adding a dependency, check whether the functionality is already available through:

- Expo
- React Native
- Existing project dependencies
- Existing project utilities

Examples of Expo APIs that should be considered where appropriate:

```text
expo-camera
expo-image-picker
expo-location
expo-secure-store
expo-notifications
```

When adding an Expo package:

```bash
pnpm exec expo install <package>
```

Always verify compatibility with **Expo SDK 57.0.0**.

Before using an unfamiliar Expo API, consult:

https://docs.expo.dev/versions/v57.0.0/

---

# Expo Router

Use **Expo Router** for navigation.

Routes belong inside:

```text
app/
```

Example:

```text
app/
├── _layout.tsx
├── index.tsx
├── login.tsx
├── profile.tsx
└── settings.tsx
```

Nested routes:

```text
app/
├── _layout.tsx
├── index.tsx
├── auth/
│   ├── _layout.tsx
│   ├── login.tsx
│   └── register.tsx
└── (tabs)/
    ├── _layout.tsx
    ├── home.tsx
    ├── profile.tsx
    └── settings.tsx
```

Use Expo Router APIs:

```tsx
import { router } from "expo-router";

router.push("/profile");
```

Do not manually configure React Navigation unless the project has a specific reason to do so.

Before changing navigation:

- Inspect `app/`.
- Inspect relevant `_layout.tsx` files.
- Check existing route groups.
- Verify the target route actually exists.

Do not guess route paths.

---

# Safe Areas

Screens must account for device safe areas.

Be aware of:

- iOS notches
- Dynamic Island
- Status bars
- Home indicators
- Android navigation areas

Use the project's existing safe-area solution.

Do not manually add arbitrary top padding to compensate for device-specific system UI when a proper safe-area API is available.

Example:

```tsx
<SafeAreaView className="flex-1 bg-white">...</SafeAreaView>
```

Follow the SDK 57 documentation and the project's existing implementation.

---

# Platform Differences

Android and iOS may behave differently.

Use:

```tsx
import { Platform } from "react-native";
```

for small platform-specific differences.

Example:

```tsx
const paddingTop = Platform.OS === "ios" ? 20 : 10;
```

For substantial platform-specific implementations, use:

```text
Component.ios.tsx
Component.android.tsx
```

Do not add platform-specific behavior unless it is necessary.

Always consider:

- Keyboard behavior
- Status bars
- Safe areas
- Permissions
- Back navigation
- Touch behavior
- Native dialogs
- Image rendering

---

# Images

Use React Native / Expo image APIs.

Example:

```tsx
<Image source={{ uri: imageUrl }} className="h-40 w-full rounded-xl" />
```

Consider:

- Loading states
- Failed image loads
- Aspect ratio
- Placeholder content
- Remote image availability

Never assume a remote image will always load successfully.

---

# Lists

For potentially large datasets, prefer `FlatList`:

```tsx
<FlatList
  data={users}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <UserCard user={item} />}
/>
```

Avoid rendering large datasets with:

```text
data.map(...)
```

inside a `ScrollView`.

For large lists, consider:

- Pagination
- Stable keys
- Efficient `renderItem`
- Avoiding unnecessary re-renders
- Appropriate list configuration

Do not optimize list rendering prematurely if the dataset is small.

---

# Forms

Forms should provide:

- Proper labels
- Validation
- Clear error messages
- Appropriate keyboard types
- Disabled states
- Loading states
- Accessible touch targets

Example:

```tsx
<TextInput
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  autoCapitalize="none"
  autoCorrect={false}
  className="rounded-xl border border-gray-300 px-4 py-3"
/>
```

Do not rely solely on placeholder text as a form label.

---

# API / Data Fetching

Keep API communication separate from UI components.

Prefer:

```text
src/
├── api/
│   ├── client.ts
│   ├── auth.ts
│   └── users.ts
├── services/
├── hooks/
├── types/
└── utils/
```

Avoid large API calls directly inside JSX or screen rendering logic.

Instead of:

```tsx
useEffect(() => {
  fetch("https://api.example.com/users")
    .then(...)
    .then(...);
}, []);
```

prefer a dedicated API/service layer.

Keep:

- Request logic
- Response transformation
- Authentication handling
- Error handling

outside presentational components when practical.

Never hardcode secrets into API clients.

---

# Environment Variables and Secrets

Never hardcode:

- API keys
- Secret tokens
- Private credentials
- Production secrets
- Database credentials

Use Expo-compatible environment configuration.

Remember:

> Anything shipped inside a mobile application should be assumed to be inspectable by the user.

Public client configuration is not the same as a secret.

Never put a backend secret directly into the React Native application.

---

# State Management

Start with React state:

```text
useState
useReducer
useContext
```

Do not introduce a global state library unless the application actually requires one.

Keep state local when it belongs to a single screen or component.

Prefer local state for:

- Form inputs
- Modal visibility
- Temporary UI state
- Screen-specific loading states
- Temporary selections

Do not put every piece of state into global state.

---

# Hooks

Create custom hooks when logic is reused.

Example:

```tsx
function useUser(userId: string) {
  // User-related data and behavior.
}
```

Keep hooks focused.

Avoid "god hooks" responsible for unrelated concerns such as:

- API calls
- Navigation
- Authentication
- UI state
- Formatting
- Multiple unrelated business domains

A hook should have a clear responsibility.

---

# Authentication

Keep authentication logic separate from individual screens.

Prefer:

```text
src/
└── auth/
    ├── auth-context.tsx
    ├── auth-service.ts
    └── use-auth.ts
```

Sensitive authentication tokens should not be stored in ordinary AsyncStorage when secure storage is required.

Consider Expo SecureStore for sensitive tokens.

Authentication screens should provide:

- Loading states
- Error states
- Validation
- Disabled submission states
- Appropriate navigation behavior

Never log authentication tokens, passwords, or other secrets.

---

# Error Handling

Never silently ignore errors.

Avoid:

```tsx
try {
  await saveUser();
} catch {}
```

Prefer:

```tsx
try {
  await saveUser();
} catch (error) {
  console.error("Failed to save user:", error);
}
```

User-facing operations should provide useful feedback.

Example:

```tsx
Alert.alert(
  "Something went wrong",
  "We couldn't save your changes. Please try again.",
);
```

Do not expose:

- Stack traces
- Internal server errors
- Database errors
- Authentication details
- Sensitive backend information

to users.

---

# Loading States

Async operations should provide an appropriate loading state.

Example:

```tsx
<Pressable disabled={loading}>
  <Text>{loading ? "Saving..." : "Save"}</Text>
</Pressable>
```

Prevent duplicate submissions while an operation is in progress.

Loading states should communicate meaningful progress without unnecessarily blocking the entire screen.

---

# Accessibility

Accessibility is required for interactive UI.

Use appropriate properties:

```tsx
<Pressable accessibilityRole="button" accessibilityLabel="Save profile">
  ...
</Pressable>
```

Consider:

- Accessibility labels
- Accessibility roles
- Sufficient touch target sizes
- Readable text
- Screen-reader behavior
- Focus behavior
- Error announcements where appropriate

Do not communicate important information using color alone.

---

# Performance

Do not optimize prematurely.

First write clear code.

When an actual performance problem exists, consider:

- `FlatList`
- `memo`
- `useMemo`
- `useCallback`
- Image optimization
- Pagination
- Caching
- Debouncing
- Avoiding unnecessary renders

Do not blindly wrap every component in `memo`.

Do not blindly wrap every function in `useCallback`.

Only optimize when there is a meaningful reason.

---

# File Organization

Prefer feature-oriented organization as the project grows.

Example:

```text
app/
├── _layout.tsx
├── index.tsx
├── (auth)/
│   ├── login.tsx
│   └── register.tsx
└── (tabs)/
    ├── home.tsx
    ├── profile.tsx
    └── settings.tsx

src/
├── components/
│   ├── ui/
│   └── common/
├── features/
│   ├── auth/
│   ├── users/
│   └── posts/
├── hooks/
├── services/
├── api/
├── types/
├── utils/
└── constants/
```

Do not put substantial business logic inside route files when it can reasonably live in reusable modules.

---

# Naming Conventions

## Components

Use PascalCase:

```text
UserCard.tsx
ProfileHeader.tsx
LoginForm.tsx
```

## Hooks

Use camelCase beginning with `use`:

```text
useAuth.ts
useUser.ts
useDebounce.ts
```

## Utilities

Use camelCase:

```text
formatDate.ts
validateEmail.ts
storage.ts
```

## Routes

Follow Expo Router conventions.

Prefer lowercase route names:

```text
profile.tsx
settings.tsx
login.tsx
```

---

# Imports

Keep imports organized.

Prefer:

```tsx
import { useState } from "react";

import { Pressable, Text, View } from "react-native";

import { router } from "expo-router";

import { Button } from "@/components/ui/Button";
```

Use project path aliases when configured.

Avoid excessive relative imports such as:

```text
../../../../components/Button
```

Do not introduce a path alias solely to avoid one or two reasonable relative imports if the project does not already use aliases.

---

# Comments

Comments should explain **why**, not what.

Bad:

```tsx
// Set loading to true.
setLoading(true);
```

Good:

```tsx
// Prevent duplicate submissions while the request is in progress.
setLoading(true);
```

Do not add comments for obvious code.

Prefer clear code over comments.

---

# Dependencies

Before adding a dependency:

1. Check whether Expo provides the functionality.
2. Check whether React Native provides the functionality.
3. Check whether the project already has a dependency that solves the problem.
4. Check the exact SDK 57 documentation when relevant.
5. Verify React Native / Expo compatibility.
6. Check whether native configuration is required.
7. Prefer actively maintained packages.
8. Consider whether the dependency is actually necessary.

For Expo-compatible packages:

```bash
pnpm exec expo install <package>
```

For normal JavaScript/TypeScript packages:

```bash
pnpm add <package>
```

For development-only packages:

```bash
pnpm add -D <package>
```

Do not install a web-only package merely because it works with React.

Do not add a dependency for functionality that can be implemented simply and reliably with existing APIs.

---

# Commands

Use **pnpm** as the project's package manager.

Typical Expo commands:

```bash
pnpm exec expo start
pnpm exec expo start --android
pnpm exec expo start --ios
pnpm exec expo start --web
```

Clear the Metro cache:

```bash
pnpm exec expo start --clear
```

For dependency compatibility:

```bash
pnpm exec expo install
```

TypeScript:

```bash
pnpm exec tsc --noEmit
```

ESLint:

```bash
pnpm exec eslint .
```

Do not assume every command exists.

First inspect `package.json` and use the project's configured scripts when available.

Prefer:

```bash
pnpm run <script>
```

when the project provides an equivalent script.

---

# Initial Project Setup

For a new project, the expected setup is:

```bash
pnpm dlx create-expo-app@latest my-app
cd my-app
```

Use the default Expo template unless the project explicitly requires another template.

Verify the clean Expo project before adding additional dependencies:

```bash
pnpm exec expo start
```

Then install NativeWind:

```bash
pnpm add nativewind@4.2.7 react-native-reanimated react-native-safe-area-context
```

Install Tailwind development dependencies:

```bash
pnpm add -D tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11 babel-preset-expo
```

Initialize Tailwind:

```bash
pnpm exec tailwindcss init
```

After modifying Babel or Metro configuration, clear the Expo/Metro cache:

```bash
pnpm exec expo start --clear
```

The project should use `pnpm-lock.yaml`.

Do not introduce npm or yarn lockfiles.

---

# Testing

When tests exist, update them when behavior changes.

Prioritize tests for:

- Business logic
- Utility functions
- API transformations
- Authentication
- Forms
- Important user flows
- Complex components

Do not write tests that merely reproduce implementation details.

Before finishing a task, run the relevant existing test command.

---

# Debugging

When fixing a bug:

1. Reproduce the issue.
2. Identify the root cause.
3. Inspect related code and existing patterns.
4. Make the smallest reasonable change.
5. Check for related regressions.
6. Run relevant type checks, linting, and tests.
7. Verify the fix on the relevant platform(s) when possible.

Do not suppress errors to make the problem disappear.

Do not make unrelated refactors during a bug fix.

---

# Git

Keep commits focused.

Do not modify unrelated files.

Do not commit:

```text
.env
.env.local
node_modules/
.expo/
dist/
```

unless explicitly required by the project.

Never commit:

- API secrets
- Private keys
- Authentication tokens
- Passwords
- Production credentials

Before finishing, inspect the changed files and ensure no secrets or unrelated modifications were introduced.

---

# Before Making Changes

Follow this workflow before implementing a feature or fix.

### Step 1: Read the Expo Documentation

Read:

https://docs.expo.dev/versions/v57.0.0/

This is mandatory.

### Step 2: Understand the Repository

Inspect:

- `package.json`
- `pnpm-lock.yaml`
- `app/`
- `src/`
- Existing components
- Existing hooks
- Existing services
- Existing API clients
- Existing configuration
- Existing tests

### Step 3: Understand Existing Conventions

Determine:

- How navigation works
- How styling works
- How API calls work
- How errors are handled
- How authentication works
- How state is managed
- How components are organized
- How tests are written

### Step 4: Plan the Smallest Change

Reuse existing code whenever possible.

Avoid unnecessary dependencies and abstractions.

### Step 5: Implement

Write strongly typed, Expo-compatible React Native code.

### Step 6: Verify

Run relevant:

- TypeScript checks
- ESLint
- Tests
- Expo checks

### Step 7: Review

Before finishing:

- Remove unused imports.
- Remove unused variables.
- Check navigation paths.
- Check mobile layouts.
- Check safe areas.
- Check loading states.
- Check error states.
- Check accessibility.
- Check Android/iOS behavior where relevant.
- Check for secrets.
- Check the final diff for unrelated changes.

---

# Before Finishing a Task

A task is not complete until the implementation has been reviewed against the following checklist.

## Code

- TypeScript types are correct.
- No unnecessary `any` usage.
- No TypeScript errors were suppressed.
- Imports are correct and organized.
- No unused code remains.
- Components have clear responsibilities.
- Existing components/utilities were reused where appropriate.

## Expo

- The exact Expo SDK 57 documentation was consulted.
- Expo APIs are compatible with SDK 57.0.0.
- Dependencies are compatible with the project's Expo version.
- No unnecessary native dependency was introduced.

## Navigation

- Routes exist.
- Navigation paths are correct.
- Existing route groups/layouts were respected.

## UI

- Works on different screen sizes.
- Safe areas are handled.
- Loading states are handled.
- Error states are handled.
- Keyboard behavior is considered where relevant.
- Android/iOS differences are considered where relevant.

## Accessibility

- Interactive elements have appropriate accessibility roles.
- Important controls have accessible labels.
- Touch targets are sufficiently large.
- Important information is not communicated by color alone.

## Security

- No secrets were introduced.
- No credentials were logged.
- Sensitive tokens are stored appropriately.
- User-facing errors do not expose internal information.

## Verification

- Relevant TypeScript checks were run.
- Relevant lint checks were run.
- Relevant tests were run.
- The final diff contains only relevant changes.

---

# Important Principle

Prefer **simple, explicit, maintainable React Native code** over clever abstractions.

When two implementations are reasonable, prefer the one that:

- Is easier for another developer to understand
- Uses fewer dependencies
- Fits Expo conventions
- Uses the existing project patterns
- Is strongly typed
- Is easy to test
- Is easy to modify later
- Minimizes unnecessary changes

**Do not over-engineer the application.**

When uncertain, inspect the existing project and consult the exact Expo SDK 57 documentation before making assumptions.
