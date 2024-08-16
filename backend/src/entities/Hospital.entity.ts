import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Hospital {
  @PrimaryGeneratedColumn()
  cd_hospital: number;

  @Column({ type: 'text', nullable: false })
  nm_hospital: string;

  @Column({ type: 'decimal', nullable: false })
  nr_latitude: number;

  @Column({ type: 'decimal', nullable: false })
  nr_longitude: number;
}
