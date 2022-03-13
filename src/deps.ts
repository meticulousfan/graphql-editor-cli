export default {
  name: 'graphql-editor-cli',
  version: '0.3.3',
  description: 'GraphQL -> anything. Use GraphQL as your source of truth. GraphQL Editor Official CLI.',
  main: 'lib/index.js',
  author: 'Artur Czemiel',
  license: 'MIT',
  bin: {
    'graphql-editor-cli': 'lib/index.js',
    gecli: 'lib/index.js',
  },
  type: 'module',
  scripts: {
    build: 'ttsc',
    start: 'ttsc --watch',
    'extract-packages': 'cp package.json src/deps.json',
    editor: 'zeus https://api.staging.project.graphqleditor.com/graphql ./src -n --es',
    shared: 'imp sync',
    cli: 'node lib/index.js',
    plop: 'plop',
  },
  devDependencies: {
    '@types/adm-zip': '^0.4.34',
    '@types/archiver': '^5.3.1',
    '@types/bson': '^4.0.5',
    '@types/express': '^4.17.13',
    '@types/graphql': '^14.2.3',
    '@types/inquirer': '^8.2.0',
    '@types/node': '^17.0.21',
    '@types/node-fetch': '^2.6.1',
    '@types/qs': '^6.9.7',
    '@types/tsc-watch': '^4.2.0',
    '@types/yargs': '^17.0.8',
    '@typescript-eslint/eslint-plugin': '^5.12.1',
    '@typescript-eslint/parser': '^5.12.1',
    eslint: '^8.10.0',
    'eslint-config-prettier': '^8.4.0',
    'eslint-plugin-prettier': '^4.0.0',
    impuddle: '0.0.2',
    plop: '^3.0.5',
    prettier: '^2.5.1',
    'ts-node': '^10.5.0',
    ttypescript: '^1.5.13',
    typescript: '^4.5.5',
    'typescript-transform-paths': '^3.3.1',
  },
  dependencies: {
    'adm-zip': '^0.5.9',
    archiver: '^5.3.0',
    chalk: '^5.0.0',
    clipboardy: '^3.0.0',
    conf: '^10.1.1',
    execa: '^6.1.0',
    express: '^4.17.3',
    'fast-glob': '^3.2.11',
    'graphql-js-tree': '0.0.3',
    'graphql-zeus': '^4.0.4',
    inquirer: '^8.2.0',
    'inquirer-autocomplete-prompt': '^2.0.0',
    mime: '^3.0.0',
    'node-fetch': '^2.6.7',
    open: '^8.4.0',
    ora: '^6.1.0',
    'pkg-install': '^1.0.0',
    qs: '^6.10.3',
    'stucco-js': '^0.9.16',
    'tsc-watch': '^4.6.0',
    yargs: '^17.3.1',
  },
};
