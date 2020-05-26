# `@disruptph/json-api-normalizer`

This is basically just re-exporting the [`json-api-normalizer`](https://github.com/yury-dymov/json-api-normalizer#readme). The only difference is that this package includes a typescript type definition.

## Usage

```js
import normalizer from '@disruptph/json-api-normalizer';

const data = {
  data: {
    id: '1',
    attributes: {
      name: 'John Doe',
      age: '25',
    },
    type: 'user'
  }
};

normalizer.normalize(data);

// Result:
// {
//   user: {
//     1: {
//       id: '1',
//       attributes: {
//         name: 'John Doe',
//         age: '25',
//       },
//       type: 'user'
//     }
//   }
// }
```
