import { QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createSpecificationsCars1670122122208 {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'specificationsCars',
        columns: [
          {
            name: 'car_id',
            type: 'uuid',
          },
          {
            name: 'specification_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'specificationsCars',
      new TableForeignKey({
        name: 'FKSpecificationCar',
        referencedTableName: 'specifications',
        referencedColumnNames: ['id'],
        columnNames: ['specification_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL ',
      }),
    );
    await queryRunner.createForeignKey(
      'specificationsCars',
      new TableForeignKey({
        name: 'FKCarSpecification',
        referencedTableName: 'cars',
        referencedColumnNames: ['id'],
        columnNames: ['car_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL ',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'specificationsCars',
      'FKCarSpecification',
    );
    await queryRunner.dropForeignKey(
      'specificationsCars',
      'FKSpecificationCar',
    );

    await queryRunner.dropTable('specificationsCars');
  }
}
