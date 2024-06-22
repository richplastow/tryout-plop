# Step 1: Install Plop and create Example 1

[^ Notes](./00-notes.md)

> _“Plop is a little tool that saves you time and helps your team build new files_
> _with consistency. Plop generates code when you want, how you want, and can be_
> _changed whenever you want.”_ - <https://plopjs.com/>

## Install `plop` 4.0.1 as a dev-dependency

```sh
npm i -D plop
# npm WARN deprecated inflight@1.0.6: ...
# npm WARN deprecated rimraf@3.0.2: ...
# npm WARN deprecated glob@7.2.3: ...
# added 196 packages, and audited 197 packages in 7s
# 56 packages are looking for funding
#   run `npm fund` for details
# found 0 vulnerabilities
```

On my macOS, the newly created node_modules/ is 17,419,115 bytes (34.3 MB on
disk) for 5,895 items.

In package.json, specify that we will be using ES6 module imports, and add one
item to `"scripts"`:

```json
{
  ...,
  "type": "module",
  "scripts": {
    "plop": "plop"
  },
  ...
}
```

## Create a TypeScript configuration file

This repo does not directly use any TypeScript, but the following file will
improve the developer experience when working on the plopfile.js file.

Add tsconfig.json to the top level:

```json
/**
 * This file tells VS Code's TypeScript server to highlight type errors in the
 * plopfile.js JavaScript file. You read that right: the plopfile is JavaScript,
 * not TypeScript, but the developer experience still benefits from live type
 * checking.
 *
 * This file does not:
 * - Generate any type declarations
 * - Check that types are used correctly before deployment
 */
 {
    "compilerOptions": {

        // Enable error reporting in the plopfile.
        // Same as adding `// @ts-check` at the top.
        "checkJs": true,
  
        // Generate .d.ts files from the source JavaScript files. The tsserver
        // uses these .d.ts files internally - they're not written to the repo.
        "declaration": true,
  
        // Only output d.ts files, don't try to transpile JS files to JS files.
        "emitDeclarationOnly": true,

        // Allow ES2019 features, like `repeat()` and `flatMap()`.
        "lib": [ "dom", "es2019" ]
    },

    // Just match the plopfile.
    "include": [ "plopfile.js" ]
}
```

## Create the first example generator

Based on the [plop docs,](
https://plopjs.com/documentation/#3-create-a-plopfilejs-at-the-root-of-your-project)
create plopfile.js in the top-level:

```js
export default function (
    /** @type {import('plop').NodePlopAPI} */
    plop
) {
    plop.setGenerator('example-1', {
        description: 'First example generator',
        prompts: [
            {
                type: 'input',
                name: 'heading',
                message: 'Please provide a heading'
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'example-output/example-1-{{heading}}.js',
                templateFile: 'example-templates/example-1.hbs'
            },
        ],
    });
};
```

And create example-templates/example-1.hbs - the first example template:

```hbs
console.log('This is Example 1, heading is "{{heading}}"');
```

Check that it works using `npm run`:

```sh
npm run plop example-1
# > tryout-plop@0.0.1 plop
# > plop example-1
# ? Please provide a heading
some-heading
# ✔  ++ /example-output/example-1-some-heading.js
node example-output/example-1-some-heading.js
# This is Example 1, heading is "some-heading"
```

> __BUG:__ Don’t use `title` as a property name in Plop. It can lead to problems
> when trying to bypass prompts on the command line.