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

## Publish Steps

Following steps will only work on `master` branch

### Versioniong

Before publishing, we have to build and version the packages that has been updated. We could do so by running the commmand `yarn run version [semver keyword]`. Eg.,

```sh
yarn run build

yarn run version patch
```

_Some of the semver keywords are: `major`, `minor`, `patch`, and `prerelease`._

This command will create a new commmit with the version bump, and automatically pushes the commit to the git remote.

You may optionally not pass the semver keyword if you want to set the versions manually.

_Note that we do also have a dryrun command: `yarn run version:dryrun`. When running this command, make sure to git reset the changes made by the dryrun before running the actual version command._

### Publishing

After the versioning, you may now publish the packages using the command below:

```sh
yarn run publish
```
