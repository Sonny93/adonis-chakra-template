import { middleware } from '#start/kernel';
import router from '@adonisjs/core/services/router';
const SigninController = () => import('#controllers/auth/signin_controller');
const LoginController = () => import('#controllers/auth/login_controller');
const LogoutController = () => import('#controllers/auth/logout_controller');
const VerifyEmailsController = () =>
  import('#controllers/auth/verify_emails_controller');

router.on('/').renderInertia('home');

router
  .group(() => {
    router.get('/signin', [SigninController, 'create']);
    router.post('/signin', [SigninController, 'store']);

    router.get('/login', [LoginController, 'create']);
    router.post('/login', [LoginController, 'store']);

    router.get('/verify/:token', [VerifyEmailsController, 'verifyToken']);
  })
  .prefix('/auth')
  .middleware(middleware.guest());

router
  .group(() => {
    router.post('/logout', [LogoutController, 'index']);
  })
  .prefix('/auth')
  .middleware(middleware.auth());
