# Project Title: VITE, React-Hook-Form, ZOD, and Material UI v5 Implementation

## Project Overview

This project serves as a record of the steps taken to implement VITE, React-Hook-Form, ZOD, and Material UI v5. The goal
is to document the process of implementing these technologies and to provide a resource for others who may encounter
similar challenges. The project aims to fill the gap in available resources by providing detailed steps for achieving
specific functionalities.

## Technologies Used

- VITE
- React-Hook-Form
- ZOD
- Material UI v5

## Project Structure

The project will be organized into the following sections:

1. Introduction
2. Installation
3. Configuration
4. Usage
5. Troubleshooting
6. Contributing
7. License

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses
  [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast
  Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or
  `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` &
  `plugin:react/jsx-runtime` to the `extends` list

## References

- https://github.com/CodingGarden/react-ts-starter

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.
