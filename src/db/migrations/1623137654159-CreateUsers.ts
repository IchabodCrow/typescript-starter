import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1623137654159 implements MigrationInterface {
  private newTable = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        default: 'uuid_generate_v4()',
      },
      {
        name: 'first_name',
        type: 'character varying',
        isNullable: false,
      },
      {
        name: 'last_name',
        type: 'character varying',
        isNullable: false,
      },
      {
        name: 'email',
        type: 'character varying',
        isNullable: false,
      },

      {
        name: 'encrypted_password',
        type: 'character varying',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'timestamp without time zone',
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamp without time zone',
        isNullable: false,
        default: 'now()',
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.newTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.newTable);
  }
}
