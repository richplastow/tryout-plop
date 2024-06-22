export default function (plop) {
    plop.setGenerator('example-1', {
        description: 'First example generator',
        prompts: [
            {
                type: 'input',
                name: 'title',
                message: 'Please provide a title'
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'example-output/example-1-{{title}}.js',
                templateFile: 'example-templates/example-1.hbs'
            },
        ],
    });

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
};
