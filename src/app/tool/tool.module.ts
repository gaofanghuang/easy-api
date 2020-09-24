import { Module, HttpModule } from '@nestjs/common';
import { ToolController } from './tool.controller';
import { ToolService } from './tool.service';

@Module({
  imports: [HttpModule],
  controllers: [ToolController],
  providers: [ToolService],
  exports: [ToolService],
})
export class ToolModule {}
