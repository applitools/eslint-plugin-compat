# @applitools/eslint-plugin-compat

> ESLint rules for IE, based on Salesforce LWC rules.

## Installation

```
$ npm install eslint babel-eslint @applitools/eslint-plugin-compat --save-dev
```

## Usage

Add `compat` to the `plugins` section of your configuration. Then configure the desired rules in the `rules` sections.

Example of `.eslintrc`:

```json
{
    "parser": "babel-eslint",
    "plugins": ["@applitools/eslint-plugin-compat"],
    "rules": {
        "@applitools/compat/no-deprecated": "error",
        "@applitools/compat/valid-api": "error",
        "@applitools/compat/no-document-query": "error"
    }
}
```

For more details about configuration please refer to the dedicated section in the ESLint documentation: https://eslint.org/docs/user-guide/configuring

## Rules

| Rule ID                                                                     | Description                                                     | Fixable |
| --------------------------------------------------------------------------- | --------------------------------------------------------------- | ------- |
| [compat/no-async-await](./docs/rules/no-async-await.md)                     | disallow usage of the async-await syntax                        |         |
| [compat/no-for-of](./docs/rules/no-for-of.md)                               | disallow usage of the for-of syntax                             |         |
| [compat/no-rest-spread-parameter](./docs/rules/no-rest-spread-parameter.md) | disallow usage of the rest parameter and spread operator syntax |
