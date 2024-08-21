import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Hospital, Medico } from "../entities"

@Entity()
export class Chamado {
  @PrimaryGeneratedColumn()
  nr_chamado: number;

  @ManyToOne(() => Hospital)
  @JoinColumn({ name: 'hospitalCdHospital' })
  hospital: Hospital;

  @Column({ type: 'char', length: 1, nullable: true })
  ie_tipo_chamado: string;

  @Column({ type: 'varchar', nullable: true })
  nm_paciente: string;

  @Column({ type: 'varchar', nullable: true })
  ie_sexo: string;

  @Column({ type: 'varchar', nullable: true })
  ie_status_chamado: string;

  @ManyToOne(() => Medico, { nullable: true })
  @JoinColumn({ name: 'medicoCdMedico' })
  medico: Medico;
}
