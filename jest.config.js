const nextJest = require("next/jest");

// Tell next/jest where your Next.js app is located
const createJestConfig = nextJest({
  dir: "./", // root of your Next.js project
});

const customJestConfig = {
  // Use jsdom to simulate browser environment
  testEnvironment: "jsdom",

  // Run setup after the environment is ready
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Recognize test files
  testMatch: ["**/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)"],

  // Mock CSS modules and map aliases
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",          // map @/ to project root
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  // Transform JS/TS files
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },

  // Ignore node_modules
  transformIgnorePatterns: ["/node_modules/"],
};

module.exports = createJestConfig(customJestConfig);
