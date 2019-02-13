# React Native TypeScript Prototyping Workspace

A react native workspace project based on `react-native init --template typescript` for experimentations.

## Guidelines

### Navigation Menu
- Bottom tabs (`createBottomTabNavigator()`) is used for top-level navigation with 4 screens or less.
- Left/right drawers (`createDrawerNavigator()`) is used for top-level navigation with 5 or more screens.
- DO NOT use bottom tabs and drawers at the same time.
- For top tabs with swiping and animations enabled, use `react-native-tab-view`.
- Usability guidelines do not recommend having swipe gestures or sliding animations for bottom tabs. DO NOT attempt to overwrite `react-navigation` limited behaviors.

### State and storage
- Use Redux only for global states (e.g. authentication tokens, shared data, etc.) and React states for local states (loading, etc.).
- Use `redux-persist` to save the state to **AsyncStorage**. Include only the important values (e.g. authentication tokens, user profiles, etc.) and blacklist the rest if storage space must be preserved.
- **AsyncStorage** is not secured by default, so encrypt the persisted state using `redux-persist-transform-encrypt`. For the encryption key, use `DeviceInfo.getUniqueID()` from `react-native-device-info` or a UUID stored in `react-native-keychain`.

## Issues
1. The generated template from `react-native init --template typescript` does not have a functioning jest configuration for TypeScript. Resolved by adding `jest.config.js` and removing jest configuraiton from `package.json`.
1. Prettier cannot be configured to support the following code format (related [issue](https://github.com/prettier/prettier/issues/840)):
```javascript
if (...) {
    ...
}
else if (...) {
    ...
}
else {
    ...
}
```

## TODOs
1. Use lottie/bodymovin animations.
1. Use axios for web requests.
1. Add google maps and customize theme and user experience
1. Add facebook integration
1. Add sharing capability
1. Add camera capabilities
1. Add sensor (GPS, gyro, compass, etc.) capabilities