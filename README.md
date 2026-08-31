# ts-starter

A minimal TypeScript starter (TypeScript + Vitest + ESLint + Prettier) used as
the starting point for the Gojob technical interview.

## Requirements

- **Node 22** — pinned in [`.nvmrc`](.nvmrc) and via [Volta](https://volta.sh) in
  `package.json`. With `nvm`, run `nvm use`; with Volta it is picked up
  automatically.
- **pnpm 11** — pinned through the `packageManager` field. You do not need to
  install it yourself: run `corepack enable` once and the right version is used
  automatically.

Node 20 and below will not work: it reached end of life in April 2026, and the
TypeScript config extends `@tsconfig/node22`.

## Getting started

```bash
corepack enable
pnpm install
pnpm test
```

You should see the example test pass. If it does, your environment is ready.

### Using the dev container (optional)

The repo ships a [dev container](.devcontainer/devcontainer.json). Opening the
folder in VS Code ("Reopen in Container") or in GitHub Codespaces gives you Node
22 with dependencies already installed, plus the recommended extensions.

## Commands

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `pnpm test`       | Run the test suite once                     |
| `pnpm test:watch` | Run the tests in watch mode (handy for TDD) |
| `pnpm build`      | Type-check and compile to `dist/`           |
| `pnpm lint`       | Lint every `.ts` file                       |

## Writing tests

Tests are picked up from any file matching `*.spec.ts`, and live next to the
code they cover:

```
src/
  sum.ts
  sum.spec.ts
```

`describe`, `it` and `expect` are available as globals — there is nothing to
import.

`src/sum.ts` and `src/sum.spec.ts` are a throwaway example so that a fresh clone
builds, tests and lints green. **Delete them when you start the exercise** — but
keep at least one `.ts` file in `src/`, otherwise `pnpm build` fails with
`TS18003: No inputs were found in config file`.
