export default [
  {
    env: {
      browser: true,
      es2022: true
    },
    extends: ["airbnb", "prettier", "plugin:node/recommended"],
    overrides: [],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: ["prettier"]
  }
];
