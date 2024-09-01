import VerifyEmailException from '#exceptions/verify_email_exception';
import User from '#models/user';
import VerifyEmailToken from '#models/verify_email_token';
import MailService from '#services/mail_service';
import { userLoginValidator } from '#validators/user_login';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http';

@inject()
export default class LoginController {
  constructor(private mailService: MailService) {}
  /**
   * Display form to create a new record
   */
  async create({ inertia }: HttpContext) {
    return inertia.render('auth/login');
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, auth }: HttpContext) {
    const { email, password, rememberMe } =
      await request.validateUsing(userLoginValidator);

    const user = await User.verifyCredentials(email, password);
    if (user.emailVerifiedAt === null) {
      await this.checkOrSendEmailVerification(user);
      throw new VerifyEmailException('Please verify your email address first.');
    }

    await auth.use('web').login(user, !!rememberMe);
    response.redirect('/');
  }

  async checkOrSendEmailVerification(user: User) {
    const tokenExist = await VerifyEmailToken.findBy('user_id', user.id);
    if (!tokenExist) {
      await this.mailService.sendEmailVerification(user);
    }
  }
}
