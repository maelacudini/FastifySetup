import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import js from "@eslint/js"
import tseslint from "typescript-eslint"

export default defineConfig( [
  tseslint.configs.recommended,
  { files: [ "src/**/*.{js,mjs,cjs,ts}" ] },
  // Default Node.js environment for most files
  {
    files: [ "src/**/*.{js,mjs,cjs,ts}" ],
    languageOptions: { globals: globals.node }
  },
  // Browser environment for specific client files
  {
    files: [ "src/client/**/*.{js,mjs,cjs,ts}" ],
    languageOptions: { globals: { ...globals.browser } },
  },
  // General rules
  {
    files: [ "src/**/*.{js,mjs,cjs,ts}" ],
    plugins: { js },
    extends: [ "js/recommended" ]
  },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "error",
      "indent": [ "error", 2 ],
      "no-duplicate-imports": "error",
      "object-curly-spacing": [ "error", "always" ],
      "object-curly-newline": [ "error", {
        "ObjectExpression": {
          "multiline": true, "minProperties": 2
        },
        "ObjectPattern": {
          "multiline": true, "minProperties": 2
        },
        "ImportDeclaration": "never",
        "ExportDeclaration": {
          "multiline": true, "minProperties": 2
        }
      } ],
      "semi": [ "error", "never" ]
    },
  },
  globalIgnores( [ "dist/**/*", "node_modules", "webpack.config.mjs", "webpack.config.client.mjs", "webpack.config.server.mjs" ] ),
] )