# `@disruptph/redux-utils`

!!! Under Development !!!
Add helpers for redux related code to speed up react/redux development.

## Usage

### Generators

#### Generating the store structure
```
yarn run generate store
```

creates the following file structure

```
- store/
  - entities
  	index.ts
  - loaders
  	index.ts
  - pages
  	index.ts
  - session
  	index.ts
  index.ts
  configureStore.ts
```

#### Generating entities
```
yarn run generate entity
> Entity name? users
```

creates the following files under entities directory
```
 - store/
   - entities
       users/
	 - actions.ts
	 - index.ts
	 - reducer.ts
	 - selector.ts
	 - types.ts
```

```
const reduxUtils = require('@disruptph/redux-utils');

// TODO: DEMONSTRATE API
```
