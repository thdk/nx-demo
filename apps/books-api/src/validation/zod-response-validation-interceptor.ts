import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  InternalServerErrorException,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodResponseValidationInterceptor implements NestInterceptor {
  constructor(private readonly schema: ZodSchema) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map(async (data) => {
        try {
          return this.schema.parse(data);
        } catch (error) {
          throw new InternalServerErrorException({
            message: 'Response validation failed',
            error,
          });
        }
      })
    );
  }
}
