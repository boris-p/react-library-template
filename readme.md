# Motivation

A react component library for decoupeling stand alone UI components from the main
application code base.

Technology used is react, scss and typescipt. Rollup for building, storybook, jest and react-testing-library for visual and automated testing

# Developing

There are three main ways to develop the library:

- Using storybook

        npm run storybook

- Using tests

        npm run test:watch

- Using in in another project

  install the package in another project and use it from there.
  Either consume is as any other package (after this is published) or locally.

  Using Locally:

        npm i --save ../local_path_to_project

  This will install the local instance as a dependency, establishing a symlink.

  Any time an update to the library will happen, the changes will automatically reflect in the project.

## Building

> npm run build will create a distribution in the build folder both for CommonJS and ES Modules

# TODO

rollup - some useful plugins:

- https://github.com/rollup/plugins/tree/master/packages/image
- https://github.com/rollup/plugins/tree/master/packages/json
- https://www.npmjs.com/package/rollup-plugin-terser

---

- Support test debugging from the UI and the command line
- Introduce code splitting

# Project Reference

https://blog.harveydelaney.com/creating-your-own-react-component-library/
