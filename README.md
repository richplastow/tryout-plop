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

## Running Example 1

```sh
npm run plop example-1
# > tryout-plop@0.0.1 plop
# > plop example-1
# ? Please provide a heading
just-checking
# ✔  ++ /example-output/example-1-just-checking.js
node example-output/example-1-just-checking.js
# This is Example 1, heading is "just-checking"
```

You should see that the new file example-output/example-1-just-checking.js has
been generated.

## Bypassing prompts on the command line

If `plop` has not been installed globally on your machine, you will not be able
to bypass prompts by name:

```sh
plop --version
# zsh: command not found: plop
npm run plop example-2 _ "Here's the Heading" # can bypass using underscore
# ... prompts for 'language code' and 'description', but not 'heading'
# ...
# ✔  ++ /example-output/example-2-all-working/style.css
open example-output/example-2-here-s-the-heading/index.html
# ... bypassing props using underscores works ok via `npm run plop`
npm run plop example-2 -- --heading "Another Page"
# ... prompts for 'language code', 'description' AND ALSO 'heading'
# ... bypassing props by name does not works via `npm run plop`
```

After installing `plop` globally, bypassing prompts by name should work:

```sh
npm install -g plop
# npm warn deprecated inflight@1.0.6: ...
# npm warn deprecated rimraf@3.0.2: ...
# npm warn deprecated glob@7.2.3: ...
# added 196 packages in 6s
# 56 packages are looking for funding
#   run `npm fund` for details
plop --version
# 4.0.1
plop example-2 -- --heading "Another Page"
# ... prompts for 'language code' and 'description', but not 'heading'
# ...
# ✔  ++ /example-output/example-2-another-page/style.css
open example-output/example-2-another-page/index.html
# ... bypassing props by name works using the global `plop`
```
