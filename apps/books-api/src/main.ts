import { bootstrap } from '@nx-demo/nest-bootstrap';
import { AppModule } from '@nx-demo/books-api-lib';

bootstrap(AppModule, {
  globalPrefix: 'api',
});
