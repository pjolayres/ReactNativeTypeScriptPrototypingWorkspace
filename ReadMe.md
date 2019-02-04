# React Native TypeScript Prototyping Workspace

A react native workspace project based on `react-native init --template typescript` for experimentations.


## Issues
1. The generated template from `react-native init --template typescript` does not have a functioning jest configuration for TypeScript. Resolved by adding `jest.config.js` and removing jest configuraiton from `package.json`.