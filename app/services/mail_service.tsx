import User from '#models/user';
import VerifyEmailToken from '#models/verify_email_token';
import mail from '@adonisjs/mail/services/main';
import { render } from '@react-email/components';
import MyTemplate from '../../resources/views/emails/verify_email_html.js';

export default class MailService {
  async sendEmailVerification(user: User) {
    const payload = { userId: user.id };
    const token = await VerifyEmailToken.firstOrCreate(
      payload, // search
      payload // create
    );
    const html = await render(<MyTemplate verifyToken={token.hash} />, {
      pretty: true,
    });
    await mail.send((message) => {
      message.to(user.email).subject('Verify your email address').html(html);
    });
  }
}
