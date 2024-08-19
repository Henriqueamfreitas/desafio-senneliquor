import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1723900338857 implements MigrationInterface {
    name = 'InitialMigration1723900338857'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chamado" DROP CONSTRAINT "FK_88c19e2d014a29434c8d140a623"`);
        await queryRunner.query(`ALTER TABLE "chamado" ALTER COLUMN "ie_tipo_chamado" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chamado" ALTER COLUMN "ie_status_chamado" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chamado" ALTER COLUMN "cd_medico" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chamado" ADD CONSTRAINT "FK_88c19e2d014a29434c8d140a623" FOREIGN KEY ("cd_medico") REFERENCES "medico"("cd_medico") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chamado" DROP CONSTRAINT "FK_88c19e2d014a29434c8d140a623"`);
        await queryRunner.query(`ALTER TABLE "chamado" ALTER COLUMN "cd_medico" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chamado" ALTER COLUMN "ie_status_chamado" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chamado" ALTER COLUMN "ie_tipo_chamado" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chamado" ADD CONSTRAINT "FK_88c19e2d014a29434c8d140a623" FOREIGN KEY ("cd_medico") REFERENCES "medico"("cd_medico") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
