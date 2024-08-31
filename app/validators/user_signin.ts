import { uniqueRule } from '#validators/rules/unique';
import vine, { SimpleMessagesProvider } from '@vinejs/vine';

const userSigninValidator = vine.compile(
  vine.object({
    firstname: vine.string().trim(),
    lastname: vine.string().trim(),
    email: vine
      .string()
      .email()
      .trim()
      .use(uniqueRule({ table: 'users', column: 'email' })),
    password: vine.string().trim().minLength(8).confirmed(), // need to send password_confirmation
  })
);

userSigninValidator.messagesProvider = new SimpleMessagesProvider({
  'email.unique': 'The email address is already taken',
});

export { userSigninValidator };
