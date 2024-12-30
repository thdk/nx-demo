import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootstrapModule } from '@nx-demo/nest-bootstrap';

@Module({
  imports: [BootstrapModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
