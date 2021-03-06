# `@disruptph/json-api-normalizer`

This is basically just re-exporting the [`json-api-normalizer`](https://github.com/yury-dymov/json-api-normalizer#readme). The only difference is that this package includes a typescript type definition.

## Usage

```js
import normalize from '@disruptph/json-api-normalizer';

const jsonApiData = {
  data: {
    id: '1',
    type: 'user'
    attributes: {
      name: 'John Doe',
      age: '25',
    },
    relationships: {
      posts: {
        data: [
          {
            id: '1',
            type: 'post'
          }
        ]
      }
    }
  },
  included: [
    {
      id: '1',
      type: 'post',
      attributes: {
        title: 'Hello World',
      }
    }
  ],
};

normalize(jsonApiData);

// Result:
// {
//   user: {
//     1: {
//       id: '1',
//       type: 'user'
//       attributes: {
//         name: 'John Doe',
//         age: '25',
//       },
//       relationships: {
//         posts: {
//           data: [
//             {
//               id: '1',
//               type: 'post'
//             }
//           ]
//         }
//       }
//     }
//   },
//   business: {
//     1: {
//       id: '1',
//       type: 'post',
//       attributes: {
//         title: 'Hello World',
//       }
//     }
//   }
// }
```
