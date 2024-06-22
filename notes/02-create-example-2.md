# Step 2: Create Example 2

[^ Notes](./00-notes.md)

The second example generator investigates different input types, and uses
handlebars in a more sophisticated way. It also outputs more than one file.

## Start creating the second example generator

Create another `plop.setGenerator()` call, in plopfile.mjs in the top-level.

The `force: true` property is handy, because we will be re-running this example
several times while creating it, and giving it the same title every time avoids
building up masses of generated files.

See <https://plopjs.com/documentation/#add> for more of Plop’s `add` properties.

```js
...
    plop.setGenerator('example-2', {
        description: 'Second example generator',
        prompts: [
            {
                type: 'input',
                name: 'title',
                message: 'Please provide a title',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please provide a short description',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'example-output/example-2-{{title}}/index.html',
                templateFile: 'example-templates/example-2/html.hbs',
                force: true, // overwrite file if it exists
            },
        ],
    });
...
```

Create example-templates/example-2/html.hbs:

```hbs
<!DOCTYPE html>
<html lang="{{lang}}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <meta name="description" content="{{description}}">
    <link href="./style.css" rel="stylesheet">
</head>
<body>
    <h1>{{title}}</h1>
    <p>{{description}}</p>
    <main>{{main}}</main>
    <pre></pre>
    <script src="./script.js"></script>
</body>
</html>
```

Check that it works using `npm run`:

```sh
npm run plop example-2
# > tryout-plop@0.0.1 plop
# > plop example-2
# ? Please provide a title
ok
# ? Please provide a short description
Tudo bem
# ✔  ++ /example-output/example-2-ok/index.html
open example-output/example-2-ok/index.html
```

Your default browser should open, showing the unstyled headline “ok”.

## Add the `lang` prompt

Currently example-output/example-2-ok/index.html is invalid HTML, because of the
`<html lang="">`. Example 2 should offer a selection of common language codes,
and default to `"en"` (for international English).

An overview of `inquirer` prompt types is available at:
<https://github.com/SBoudrias/Inquirer.js/blob/main/packages/inquirer/README.md#prompt-types>

Documentation for `list` and `rawList` is available at:
<https://github.com/SBoudrias/Inquirer.js/blob/main/packages/rawlist/README.md>

```js
...
    plop.setGenerator('example-2', {
        description: 'Second example generator',
        prompts: [
            {
                type: 'list',
                name: 'lang',
                message: 'Please provide a language code',
                choices: [
                    { name: 'English (default)', value: 'en' },
                    { name: 'British English', value: 'en-GB' },
                    { name: 'US English', value: 'en-US' },
                    { name: 'Arabic', value: 'ar' },
                    { name: 'Spanish', value: 'es' },
                    { name: 'French', value: 'fr' },
                    { name: 'Portuguese', value: 'pt' },
                    { name: 'Chinese', value: 'zh' },
                ],
            },
            {
                type: 'input',
                name: 'title',
                message: 'Please provide a title'
            },
            ...
        ],
...
```

Check that it works using `npm run`:

```sh
npm run plop example-2
# > tryout-plop@0.0.1 plop
# > plop example-2
# ? Please provide a language code (Use arrow keys)
# ❯ English (default) 
#   British English 
#   US English 
#   Arabic 
#   Spanish 
#   French 
#   Portuguese 
# (Move up and down to reveal more choices)
Portuguese
# ? Please provide a title
ok
# ? Please provide a short description
Tudo bem
# ✔  ++ /example-output/example-2-ok/index.html
```

You should see`<html lang="pt">` in the generated index.html file.
