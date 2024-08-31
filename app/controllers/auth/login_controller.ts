import User from '#models/user';
import { userLoginValidator } from '#validators/user_login';
import type { HttpContext } from '@adonisjs/core/http';

export default class LoginController {
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
    const { email, password } = await request.validateUsing(userLoginValidator);
    const user = await User.verifyCredentials(email, password);
    await auth.use('web').login(user);
    response.redirect('/');
  }
}
