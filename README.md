![vue3-animeflix](.github/animeflix.png)

## 🛠️ Desenvolvido com

*  [NodeJS](https://nodejs.org/en/docs/) - Ambiente de execução JavaScript
*  [Vue3](https://vuejs.org/) - Framework web with TypeScript
*  [Vite](https://vite.dev/) - Framework web with TypeScript
*  [Pinia](https://pinia.vuejs.org/) - Framework para gerenciamento de estado.
*  [Tailwind CSS](https://tailwindcss.com/docs) - Framework para estilização
*  [json-server](https://github.com/typicode/json-server) - Framework para criação da api

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```


#### json-server

```bash
npx json-server db.json
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
