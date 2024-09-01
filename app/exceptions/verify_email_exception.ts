import { Exception } from '@adonisjs/core/exceptions';

export default class VerifyEmailException extends Exception {
  static status = 401;
  static code = 'E_MISSING_EMAIL_VERIFICATION';
  static message: string;

  constructor(message: string) {
    super(message);
    this.message = message;
  }

  toString(): string {
    return this.message;
  }
}
