import User from '#models/user';
import MailService from '#services/mail_service';
import { userSigninValidator } from '#validators/user_signin';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http';
import { faker } from '@faker-js/faker';

@inject()
export default class SigninController {
  constructor(private mailService: MailService) {}
  /**
   * Display form to create a new record
   */
  async create({ inertia }: HttpContext) {
    return inertia.render('auth/signin');
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, session, response }: HttpContext) {
    const user = await request.validateUsing(userSigninValidator);
    const createdUser = await User.create({
      ...user,
      avatar: faker.image.urlLoremFlickr({ height: 128, width: 128 }),
    });
    session.flash(
      'success',
      'Account created successfully. Before continue, please verify your email address.'
    );
    this.mailService.sendEmailVerification(createdUser);
    response.redirect('/auth/login');
  }
}
