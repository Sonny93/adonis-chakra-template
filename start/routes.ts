import { middleware } from '#start/kernel';
import router from '@adonisjs/core/services/router';
const SigninController = () => import('#controllers/auth/signin_controller');

router.on('/').renderInertia('home');

router
  .group(() => {
    router.get('/signin', [SigninController, 'create']);
    router.post('/signin', [SigninController, 'store']);
  })
  .prefix('/auth')
  .middleware(middleware.guest());
