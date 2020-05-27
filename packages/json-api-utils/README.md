# `@disruptph/json-api-utils`

## Usage

### normalize

```js
import { normalize } from '@disruptph/json-api-utils';

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

### flatten

```js
import { flatten } from '@disruptph/json-api-utils';

const data = {
  1: {
    id: '1',
    type: 'user',
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
          },
          {
            id: '2',
            type: 'post'
          }
        ]
      }
    }
  }
};

flatten(data);

// Result:
// {
//   1: {
//     id: '1',
//     type: 'user',
//     name: 'John Doe',
//     age: '25',
//     posts: ['1', '2'],
//   }
// }
```
