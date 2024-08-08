module.exports = {
    preset: "ts-jest",
    transform: {
        "^.+\\.(ts|tsx)?$": ["ts-jest", {tsconfig: './tsconfig.json'},],
        "^.+\\.(js|jsx)$": "babel-jest",
    },
};
