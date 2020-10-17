import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EditArticleDTO {
  @IsNotEmpty({ message: '标题不能为空' })
  readonly title: string;
  @IsNotEmpty({ message: '内容不能为空' })
  readonly content: string;
}