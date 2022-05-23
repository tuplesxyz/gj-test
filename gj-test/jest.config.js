const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: ".",
});

const customJestConfig = {
  setupFilesAfterEnv: ["./setupTests.ts"],
  clearMocks: true,
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
