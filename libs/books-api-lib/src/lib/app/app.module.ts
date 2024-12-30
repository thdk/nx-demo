import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from '../books/books.module';
import { BootstrapModule } from '@nx-demo/nest-bootstrap';

@Module({
  imports: [BooksModule, BootstrapModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
