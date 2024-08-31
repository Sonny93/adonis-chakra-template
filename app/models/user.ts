import AppBaseModel from '#models/app_base_model';
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid';
import { DbRememberMeTokensProvider } from '@adonisjs/auth/session';
import { compose } from '@adonisjs/core/helpers';
import hash from '@adonisjs/core/services/hash';
import { column } from '@adonisjs/lucid/orm';

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
});

export default class User extends compose(AppBaseModel, AuthFinder) {
  static rememberMeTokens = DbRememberMeTokensProvider.forModel(User);

  @column()
  declare firstname: string;

  @column()
  declare lastname: string;

  @column({ serializeAs: null })
  declare email: string;

  @column({ serializeAs: null })
  declare password: string;

  @column()
  declare avatar: string;
}
