import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'verify_email_tokens';

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.string('hash').notNullable().unique();

      table.timestamp('created_at');
      table.timestamp('updated_at');
      table.timestamp('expires_at').notNullable();
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
