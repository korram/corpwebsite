import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import validateFilenamePlugin from "eslint-plugin-validate-filename";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["**/__tests__/**"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "validate-filename": validateFilenamePlugin
    },
    "rules": {
      "validate-filename/naming-rules": [
        "error",
        {
          "rules": [
            {
              "case": "pascal",
              "target": "**/components/**"
            },
            {
              "case": "kebab",
              "target": "**/app/**",
              "patterns": "^(page|layout|loading|error|not-found|route|template).tsx$"
            },
            {
              "case": "camel",
              "target": "**/hooks/**",
              "patterns": "^use"
            },
            {
              "case": "camel",
              "target": "**/providers/**",
              "patterns": "^[a-zA-Z]*Provider"
            }
          ]
        }
      ]
    }
  }
];

export default eslintConfig;
