import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ comment: '主键id' })
  id: number;

  @Column({ length: 50, comment: '登录账号', unique: true })
  userName: string;

  @Column({ length: 50, comment: '用户昵称' })
  nickName: string;

  @Column({ length: 50, comment: '登录密码'})
  password: string;

  @Column({ length: 50, comment: '加密Salt'})
  passwordSalt: string;

  @Column({ comment: '用户角色'})
  role: number;

  @Column({ type: 'timestamp', default: () => 'current_timestamp' })
  createTime: Timestamp;

  @Column({
    type: 'timestamp',
    onUpdate: 'current_timestamp',
    default: () => 'current_timestamp',
  })
  updateTime: Timestamp;
}