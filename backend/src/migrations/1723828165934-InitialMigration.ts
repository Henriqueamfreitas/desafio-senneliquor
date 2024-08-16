import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1723828165934 implements MigrationInterface {
    name = 'InitialMigration1723828165934'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "medico" ("cd_medico" SERIAL NOT NULL, "nm_medico" character varying NOT NULL, CONSTRAINT "PK_78e0c74c112170988da3bf35aa4" PRIMARY KEY ("cd_medico"))`);
        await queryRunner.query(`CREATE TABLE "hospital" ("cd_hospital" SERIAL NOT NULL, "nm_hospital" text NOT NULL, "nr_latitude" numeric NOT NULL, "nr_longitude" numeric NOT NULL, CONSTRAINT "PK_3cbb4e9a8c3f6095a889dc4c02e" PRIMARY KEY ("cd_hospital"))`);
        await queryRunner.query(`CREATE TABLE "chamado" ("nr_chamado" SERIAL NOT NULL, "ie_tipo_chamado" character, "nm_paciente" character varying, "ie_sexo" character varying, "ie_status_chamado" character varying, "cd_hospital" integer NOT NULL, "cd_medico" integer, CONSTRAINT "PK_9dbccee479c21eeac958f85df08" PRIMARY KEY ("nr_chamado"))`);
        await queryRunner.query(`ALTER TABLE "chamado" ADD CONSTRAINT "FK_acdbfd5d8d21605fbd6f2b840b7" FOREIGN KEY ("cd_hospital") REFERENCES "hospital"("cd_hospital") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chamado" ADD CONSTRAINT "FK_88c19e2d014a29434c8d140a623" FOREIGN KEY ("cd_medico") REFERENCES "medico"("cd_medico") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chamado" DROP CONSTRAINT "FK_88c19e2d014a29434c8d140a623"`);
        await queryRunner.query(`ALTER TABLE "chamado" DROP CONSTRAINT "FK_acdbfd5d8d21605fbd6f2b840b7"`);
        await queryRunner.query(`DROP TABLE "chamado"`);
        await queryRunner.query(`DROP TABLE "hospital"`);
        await queryRunner.query(`DROP TABLE "medico"`);
    }

}
