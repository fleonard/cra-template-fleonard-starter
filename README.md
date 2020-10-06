# Create React App template Typescript + Redux

Tired of setting up everything from scratch when creating your React App?
This template will solve all your issues, it's configured with:

- [Typescript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [React Router](https://reacttraining.com/react-router/)
- [Styled Components](https://styled-components.com/)
- [Material UI](https://material-ui.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## How to use it

```
npx create-react-app your-project --template cra-template-fleonard-starter
```

or

```
yarn create-react-app your-project --template cra-template-fleonard-starter
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Redux

The basic configuration of Redux is done with [feature based](https://redux.js.org/style-guide/style-guide/#structure-files-as-feature-folders-or-ducks) folders and [Redux devtools](http://extension.remotedev.io/) browser extension is already configured.<br />
Tehere is a basic `Counter` component already configured for you to see in `src/features` folder.

## Testing

Testing is done with a combination of [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
