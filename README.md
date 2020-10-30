# disruptjs

## Initial Development Setup

After cloning the repo, run the commands below:

Setup yarn workspace

```js
yarn config set workspaces-experimental true
```

Install dependencies

```sh
yarn install

yarn run bootstrap
```

Build when theres changes

```sh
yarn run build:watch
```

## Creating New Package

```sh
npx lerna create @disruptph/[package_name]
```

Alternatively, you could also manually create a new package directory under `packages/`, and run `npm init` inside the new package directory.

## Testing a Package on Another Project

First, you have to `cd` into the package you want to use on another project, and create a symlink using `yarn link`

```sh
cd ./packages/json-api-normalizer

yarn link
```

Now go to the project where you want to use the package and run the command below:

```sh
yarn link @disruptph/json-api-normalizer
```

_Note that the name should match the `name` specified in the package's package.json file._

When you're done developing locally, you could run:

```sh
yarn unlink
```

in the **package directory**, and:

```sh
yarn unlink @disruptph/json-api-normalizer
```

in the **project directory**.

## Publishing

Do note that we use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to automatically bump version and create changelogs. So please do note of that when writing a commit message.
ex.
fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).
feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).

Once your Pull Request is merged, it will automatically publish any updated packages via Github Action.

### Dryrun

We also have a dryrun command `yarn run publish:dryrun [branch_name]`. Eg.

```sh
yarn run publish:dryrun new-feat
```
