# Tryout Plop

> Exploring 'Plop' which Turborepo uses for code generation

- Created 20240610
- Rich Plastow
- <https://github.com/richplastow/tryout-plop>
- <https://richplastow.com/tryout-plop/>

[Read the Notes](./notes/00-notes.md) for a step-by-step runthrough of how this
repo was made.

## Installation

```sh
npm install
# added 196 packages, and audited 197 packages in 1s
# 56 packages are looking for funding
#   run `npm fund` for details
# found 0 vulnerabilities
```

The node_modules/ folder is 17,425,263 bytes (34.3 MB on disk) for 5,895 items.

## Basic usage

```sh
npm run plop example-1
# > tryout-plop@0.0.1 plop
# > plop example-1
# ? Please provide a title
just-checking
# ✔  ++ /example-output/example-1-just-checking.js
node example-output/example-1-just-checking.js
# This is Example 1, title is "just-checking"
```

You should see that the new file example-output/example-1-just-checking.js has
been generated.
