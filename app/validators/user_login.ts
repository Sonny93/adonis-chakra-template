import vine from '@vinejs/vine';

export const userLoginValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim(),
    password: vine.string().trim(),
    rememberMe: vine.boolean().optional(),
  })
);
