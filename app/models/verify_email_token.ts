import AppBaseModel from '#models/app_base_model';
import User from '#models/user';
import {
  afterFind,
  beforeCreate,
  belongsTo,
  column,
} from '@adonisjs/lucid/orm';
import type { BelongsTo } from '@adonisjs/lucid/types/relations';
import { DateTime } from 'luxon';
import * as crypto from 'node:crypto';

export default class VerifyEmailToken extends AppBaseModel {
  @column()
  declare userId: number;

  @column()
  declare hash: string;

  @column.dateTime()
  declare expiresAt: DateTime;

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>;

  @beforeCreate()
  static assignToken(token: VerifyEmailToken) {
    const newToken = crypto.randomBytes(32).toString('hex');
    token.hash = newToken;
  }

  @beforeCreate()
  static assignExpirationDate(token: VerifyEmailToken) {
    token.expiresAt = DateTime.now().plus({ hours: 1 });
  }

  @afterFind()
  static ignoreExpired(token: VerifyEmailToken) {
    // check if token as expired
    if (token.expiresAt < DateTime.now()) {
      token.delete();
    }
  }
}
