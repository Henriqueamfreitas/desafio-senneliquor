import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1724073230902 implements MigrationInterface {
    name = 'InitialMigration1724073230902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chamado" DROP CONSTRAINT "FK_acdbfd5d8d21605fbd6f2b840b7"`);
        await queryRunner.query(`ALTER TABLE "chamado" DROP CONSTRAINT "FK_88c19e2d014a29434c8d140a623"`);
        await queryRunner.query(`ALTER TABLE "chamado" DROP COLUMN "cd_hospital"`);
        await queryRunner.query(`ALTER TABLE "chamado" DROP COLUMN "cd_medico"`);
        await queryRunner.query(`ALTER TABLE "chamado" ADD "hospitalCdHospital" integer`);
        await queryRunner.query(`ALTER TABLE "chamado" ADD "medicoCdMedico" integer`);
        await queryRunner.query(`ALTER TABLE "chamado" ALTER COLUMN "ie_tipo_chamado" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chamado" ALTER COLUMN "ie_status_chamado" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chamado" ADD CONSTRAINT "FK_4d903b1770db0615030af0b4651" FOREIGN KEY ("hospitalCdHospital") REFERENCES "hospital"("cd_hospital") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chamado" ADD CONSTRAINT "FK_e1b58fa713ba7e44b9e34f2ca01" FOREIGN KEY ("medicoCdMedico") REFERENCES "medico"("cd_medico") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chamado" DROP CONSTRAINT "FK_e1b58fa713ba7e44b9e34f2ca01"`);
        await queryRunner.query(`ALTER TABLE "chamado" DROP CONSTRAINT "FK_4d903b1770db0615030af0b4651"`);
        await queryRunner.query(`ALTER TABLE "chamado" ALTER COLUMN "ie_status_chamado" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chamado" ALTER COLUMN "ie_tipo_chamado" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chamado" DROP COLUMN "medicoCdMedico"`);
        await queryRunner.query(`ALTER TABLE "chamado" DROP COLUMN "hospitalCdHospital"`);
        await queryRunner.query(`ALTER TABLE "chamado" ADD "cd_medico" integer`);
        await queryRunner.query(`ALTER TABLE "chamado" ADD "cd_hospital" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chamado" ADD CONSTRAINT "FK_88c19e2d014a29434c8d140a623" FOREIGN KEY ("cd_medico") REFERENCES "medico"("cd_medico") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chamado" ADD CONSTRAINT "FK_acdbfd5d8d21605fbd6f2b840b7" FOREIGN KEY ("cd_hospital") REFERENCES "hospital"("cd_hospital") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
