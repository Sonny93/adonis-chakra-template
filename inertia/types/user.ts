import { CommonBase } from '~/types/app';

export type User = CommonBase & {
  firstname: string;
  lastname: string;
  fullname: string;
  email: string;
  avatarUrl: string;
};
