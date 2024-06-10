# Step 1: Install Plop

[^ Notes](./00-notes.md)

> _“Plop is a little tool that saves you time and helps your team build new files_
> _with consistency. Plop generates code when you want, how you want, and can be_
> _changed whenever you want.”_ - <https://plopjs.com/>

## Install `plop` 4.0.1 as a dev-dependency

```bash
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

In package.json, add the following to `"scripts"`:

```json
{
  ...,
  "scripts": {
    "plop": "plop"
  },
  ...
}
```

## Create the first example generator

Based on the [plop docs,](
https://plopjs.com/documentation/#3-create-a-plopfilejs-at-the-root-of-your-project)
create plopfile.mjs in the top-level:

```js
export default function (plop) {
    plop.setGenerator('example-1', {
        description: 'First example generator',
        prompts: [
            {
                type: 'input',
                name: 'title',
                message: 'Please provide a title'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'example-output/example-1-{{title}}.js',
                templateFile: 'example-templates/example-1.hbs'
            }
        ],
    });
};
```

And create example-templates/example-1.hbs - the first example template:

```hbs
console.log('This is Example 1, title is "{{title}}"');
```

Check that it works using `npm run`:

```bash
npm run plop example-1
# > tryout-plop@0.0.1 plop
# > plop example-1
# ? Please provide a title
some-title
# ✔  ++ /example-output/example-1-some-title.js
node example-output/example-1-some-title.js
# This is Example 1, title is "some-title"
```

