import type { User } from './user';

type Auth =
  | {
      isAuthenticated: true;
      user: User;
    }
  | {
      isAuthenticated: false;
      user: null;
    };

export type InertiaPage<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: Auth;
};
