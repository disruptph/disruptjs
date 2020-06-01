# disruptjs

## Initial Development Setup

After cloning the repo, run the commands below:

```sh
yarn install

yarn run bootstrap
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

```sh
yarn run publish
```

_Note: The command is restricted to run only on `master` branch._

### Dryrun

We also have a dryrun command `yarn run publish:dryrun [branch_name]`. Eg.

```sh
yarn run publish:dryrun new-feat
```
