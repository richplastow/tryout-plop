# Step 2: Create example-2

[^ Notes](./00-notes.md)

The second example generator investigates different input types, and uses
handlebars in a more sophisticated way. It also outputs more than one file.

## Start creating the second example generator

Add another `plop.setGenerator()` call to plopfile.mjs in the top-level:

```js
...
    plop.setGenerator('example-2', {
        description: 'Second example generator',
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
                path: 'example-output/example-2-{{title}}/index.html',
                templateFile: 'example-templates/example-2/html.hbs'
            }
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
    <meta name="description" content={{description}}>
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

```bash
npm run plop example-2
# > tryout-plop@0.0.1 plop
# > plop example-2
# ? Please provide a title
ok
# ✔  ++ /example-output/example-2-ok/index.html
open example-output/example-2-ok/index.html
```

Your default browser should open, showing the unstyled headline “ok”.

