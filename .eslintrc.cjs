module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@cspell/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
    sourceType: "module",
    // project: "./tsconfig.json", facing Error: Cannot read file 'C:\Users\devwo\OneDrive\Desktop\Projects\tsconfig.json'.
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-refresh", "react"],
  rules: {
    // built in vite rules
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // prettier rules for code foramting
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "es5",
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: "always",
        endOfLine: "auto",
      },
    ],

    // react rules
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-vars": "error",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }],

    // extras
    "import/no-unresolved": "error",
    "import/no-duplicates": "error",
    "react/prop-types": "off",
    "react/no-this-in-sfc": "error",
    "no-useless-call": "error",
    "no-nested-ternary": "off",
    "no-useless-return": "error",
    "no-console": ["error", { allow: ["log", "warn", "error"] }],
    "@typescript-eslint/no-shadow": "error",

    // import order
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "index",
          "sibling",
          "parent",
          "internal",
          "external",
          "object",
          "type",
        ],
      },
    ],
    "import/exports-last": "error",
    "import/newline-after-import": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      // typescript: {
      // alwaysTryTypes: true,
      // project: [
      //   "./tsconfig.json",
      //   "./tsconfig.node.json",
      //   "./tsconfig.app.json",
      // ],
      // },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
