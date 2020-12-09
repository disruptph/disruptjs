import qs from 'qs';
import { UserAuth } from '../userAuth';

const defaultOptions = {
  showAlerts: false,
  successMessage: null,
  headers: {},
};

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class RestClient {
  static post = async (url: string, body = {}, options: any = defaultOptions) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          ...RestClient.tokenHeaders(),
          ...(options.headers || {}),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw response;
      } else if (!!options.showAlerts) {
        RestClient.notifySuccess(options.successMessage || 'Update Successful!');
      }

      const json = await response.json();
      return { headers: response.headers, ...json };
    } catch (err) {
      if (err.name === 'AbortError') {
        throw err;
      }

      throw await err.json();
    }
  };

  static patch = async (url: string, body = {}, options: any = defaultOptions) => {
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...RestClient.tokenHeaders(),
          ...(options.headers || {}),
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw response;
      } else if (!!options.showAlerts) {
        RestClient.notifySuccess(options.successMessage || 'Update Successful!');
      }

      return await response.json();
    } catch (err) {
      if (err.name === 'AbortError') {
        throw err;
      }

      throw await err.json();
    }
  };

  static get = async <R = any>(
    url: string,
    query = {},
    options?: RequestInit
  ): Promise<R> => {
    try {
      if (Object.keys(query).length > 0) {
        url = `${url}?${qs.stringify(query)}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        ...options,
        headers: {
          ...options?.headers,
          ...RestClient.tokenHeaders(),
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw response;
      }

      return await response.json();
    } catch (err) {
      if (err.name === 'AbortError') {
        throw err;
      }

      throw await err.json();
    }
  };

  static destroy = async (url: string, options: any = defaultOptions) => {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          ...RestClient.tokenHeaders(),
          ...(options.headers || {}),
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw response;
      } else if (options.showAlerts) {
        RestClient.notifySuccess('Remove Successful!');
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        throw err;
      }

      throw await err.json();
    }
  };

  static tokenHeaders = () => {
    const { token, uid, client } = UserAuth.getData();
    const headers = {
      'access-token': `${token}`,
      uid: `${uid}`,
      client: `${client}`,
    };

    return UserAuth.isLoggedIn() ? headers : {};
  };

  static notifySuccess = (message: string) => {
    RestClient.onSuccess(message);
  };

  // Override this method on main app.
  static onSuccess = (message: any) => message;
}

export const ApiClient = RestClient;
