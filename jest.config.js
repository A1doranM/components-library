module.exports = {
  testEnvironment: "jsdom",
  // moduleNameMapper: {
  //   ".(css|less|scss)$": "identity-obj-proxy"
  // },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg$": "jest-svg-transformer"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleDirectories: ["node_modules", __dirname]
};
