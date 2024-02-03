# Change log

From this point onwards I would try to record nature of change.

### Step configure **_eslint_** and **_Prettier_**

I followed the steps from [CodingGarden react-ts-starter project](https://github.com/CodingGarden/react-ts-starter)

[eslint](https://eslint.org/), [typescript-eslint](https://typescript-eslint.io/),
[eslint-airbnb-config](https://github.com/airbnb/javascript), [prettier](https://prettier.io/)

- Easy step to configure eslint, when you are starting it from scratch.
  - run <code>npm init @eslint/config</code> or <code>npx eslint --init</code>
  - **npx** means run dependency from package.json, You must install the dependency before running npx command.
  - Config will download the required dependencies.
  ```
   ✔ How would you like to use ESLint? · problems
   ✔ What type of modules does your project use? · esm
   ✔ Which framework does your project use? · react
   ✔ Does your project use TypeScript? · No / Yes
   ✔ Where does your code run? · browser
   ✔ What format do you want your config file to be in? · JavaScript
   The config that you've selected requires the following dependencies:
   @typescript-eslint/eslint-plugin@latest eslint-plugin-react@latest @typescript-eslint/parser@latest
   ✔ Would you like to install them now? · No / Yes
   ✔ Which package manager do you want to use? · npm
   Installing @typescript-eslint/eslint-plugin@latest, eslint-plugin-react@latest, @typescript-eslint/parser@latest
  ```
- Download further dependencies
  - eslint-config-airbnb
  - eslint-config-airbnb-typescript
  - eslint-plugin-import
  - eslint-plugin-jsx-a11y
