import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSchoolsMigration1618445284549
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'schools',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'address',
            type: 'varchar',
          },
          {
            name: 'longitude',
            type: 'int',
          },
          {
            name: 'latitude',
            type: 'int',
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      // end of table
    );
    // end of queryRunner.createTable
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('schools');
  }
}
