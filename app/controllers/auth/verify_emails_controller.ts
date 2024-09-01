import VerifyEmailToken from '#models/verify_email_token';
import type { HttpContext } from '@adonisjs/core/http';

export default class VerifyEmailsController {
  async verifyToken({ params, response }: HttpContext) {
    const token = await VerifyEmailToken.findByOrFail('hash', params.token);
    await token.related('user').query().update({
      emailVerifiedAt: new Date(),
    });
    await token.delete();
    const confirmText = 'Email verified successfully. You can close this tab.';
    response.ok(confirmText);
  }
}
