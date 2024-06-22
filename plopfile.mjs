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
};
