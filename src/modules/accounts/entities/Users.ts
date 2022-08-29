import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('users')
export class Users {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  driver_license: string;
  @Column()
  admin: boolean;
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
