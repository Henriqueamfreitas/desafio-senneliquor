import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Medico {
  @PrimaryGeneratedColumn()
  cd_medico: number;

  @Column({ type: 'varchar', nullable: false })
  nm_medico: string;
}
