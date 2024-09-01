import { existRule } from '#validators/rules/exist';
import vine, { SimpleMessagesProvider } from '@vinejs/vine';

const userLoginValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .trim()
      .use(
        existRule({
          table: 'users',
          column: 'email',
        })
      ),
    password: vine.string().trim(),
    rememberMe: vine.boolean().optional(),
  })
);

userLoginValidator.messagesProvider = new SimpleMessagesProvider({
  'email.exist': 'No account found for this email address',
});

export { userLoginValidator };
