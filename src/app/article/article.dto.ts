import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EditArticleDTO {
  @IsNotEmpty({ message: '内容不能为空' })
  readonly content: string;
  readonly title: string;
  readonly author: string;
  readonly category: string;
  readonly tag: string;
}