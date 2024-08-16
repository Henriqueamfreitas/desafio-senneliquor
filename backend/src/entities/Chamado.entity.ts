import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Hospital } from './Hospital.entity';
import { Medico } from './Medico.entity';

@Entity()
export class Chamado {
  @PrimaryGeneratedColumn()
  nr_chamado: number;

  @ManyToOne(() => Hospital, { nullable: false })
  @JoinColumn({ name: 'cd_hospital' })
  cd_hospital: Hospital;

  @Column({ type: 'char', nullable: true })
  ie_tipo_chamado: string;

  @Column({ type: 'varchar', nullable: true })
  nm_paciente: string;

  @Column({ type: 'varchar', nullable: true })
  ie_sexo: string;

  @Column({ type: 'varchar', nullable: true })
  ie_status_chamado: string;

  @ManyToOne(() => Medico, { nullable: true })
  @JoinColumn({ name: 'cd_medico' })
  cd_medico: Medico;
}
