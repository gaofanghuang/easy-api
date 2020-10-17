import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn({ comment: '主键id' })
  id: number;

  @Column({ length: 50, comment: '标题', unique: true })
  title: string;

  @Column({ length: 50, comment: '作者' })
  author: string;

  @Column({ length: 50, comment: '分类'})
  category: string;

  @Column({ length: 200, comment: '标签'})
  tag: string;

  @Column({ length: 200, comment: '内容'})
  content: string;

  @Column({ type: 'timestamp', default: () => 'current_timestamp' })
  createTime: Timestamp;

  @Column({
    type: 'timestamp',
    onUpdate: 'current_timestamp',
    default: () => 'current_timestamp',
  })
  updateTime: Timestamp;
}