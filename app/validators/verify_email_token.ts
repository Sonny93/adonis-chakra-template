import { uniqueRule } from '#validators/rules/unique';
import vine from '@vinejs/vine';

export const verifyEmailTokenValidator = vine.compile(
  vine.object({
    params: vine.object({
      token: vine.string().use(
        uniqueRule({
          column: 'hash',
          table: 'verify_email_tokens',
        })
      ),
    }),
  })
);
