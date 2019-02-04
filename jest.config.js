module.exports = {
    preset: "react-native",
    transform: {
        "^.+\\.(js|tsx?)$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    },
    cacheDirectory: ".jest/cache",
    transformIgnorePatterns: [
        "node_modules/(?!(react-native|react-navigation|react-navigation-tabs|react-native-popup-menu|redux-persist)/)"
    ]
};