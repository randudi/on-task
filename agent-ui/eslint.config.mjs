import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import tseslint from "typescript-eslint"
import eslint from "@eslint/js"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["node_modules/**/*"],
  },
  { files: ["**/src/**/*.ts", "**/src/**/*.tsx"] },
  {
    rules: {
      "require-await": "error",
      semi: ["error", "never"],
      quotes: ["error", "double"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" },
      ],
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
        },
      ],

      "max-len": [
        "error",
        {
          code: 120,
          ignorePattern: "^import\\s.+\\sfrom\\s.+$",
        },
      ],

      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      eqeqeq: ["error", "always"],
      "comma-style": ["error", "last"],

      "comma-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],

      "comma-dangle": ["error", "always-multiline"],

      "prettier/prettier": [
        "error",
        {
          semi: false,
          trailingComma: "all",
          singleQuote: false,
          printWidth: 120,
        },
        {
          usePrettierrc: true,
        },
      ],

      "linebreak-style": ["error", "unix"],
    },
  },
  eslintPluginPrettierRecommended,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
]

export default eslintConfig
