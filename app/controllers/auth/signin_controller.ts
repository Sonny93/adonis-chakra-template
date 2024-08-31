import User from '#models/user';
import { userSigninValidator } from '#validators/user_signin';
import type { HttpContext } from '@adonisjs/core/http';
import { faker } from '@faker-js/faker';

export default class SigninController {
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
    await User.create({
      ...user,
      avatar: faker.image.urlLoremFlickr({ height: 128, width: 128 }),
    });
    session.flash(
      'success',
      'Account created successfully. Please login to continue.'
    );
    response.redirect('/auth/login');
  }
}
