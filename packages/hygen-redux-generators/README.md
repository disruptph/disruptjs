# `@disruptph/hygen-redux-generators`

File generators for react and redux to speed up front end development.

## Install

```
yarn global add hygen @disruptph/hygen-redux-generators

hygen-redux-init
```

You might want to gitignore created templates from `hygen-redux-init`

```
//.gitingore
_templates
```

## Usage

```
// entity name should be in camel case and singularize

hygen entity new sampleName
```

## Development

This package heavily relies on hygen package. Please check the docks on how to
create templates. [https://www.hygen.io/](https://www.hygen.io/)

Testing executables localy in your main app without the need to publish the package.
From your main app run this.

```
yarn add file:/Your/local/path/disruptjs/packages/hygen-redux-generators
npx hygen-redux-init
npx hygen entity new sampleName
```
