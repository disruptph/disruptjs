# `eslint-config-disruptph`

ESLint Config

## Usage

```sh
npm i -D eslint eslint-config-disruptph
```

```json
{
  "extends": ["disruptph"]
}
```

### TypeScript

```sh
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
```

```json
// .eslintrc.json

{
  "extends": [
    "disruptph",
    "disruptph/typescript"
  ]
}
```

### React

```sh
npm i -D eslint-plugin-react eslint-plugin-react-hooks
```

```json
{
  "extends": [
    "disruptph",
    "disruptph/react"
  ]
}
```

For TypeScript + React

```json
{
  "extends": [
    "disruptph",
    "disruptph/typescript",
    "disruptph/react"
  ]
}
```
