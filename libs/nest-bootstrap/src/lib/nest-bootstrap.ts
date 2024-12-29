import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestPinoLogger } from '@nx-demo/nest-logger';

export async function bootstrap(
  module: unknown,
  {
    globalPrefix,
    port = process.env['PORT'] ? Number(process.env['PORT']) : 3000,
  }: {
    globalPrefix?: string;
    port?: number;
  } = {}
) {
  const app = await NestFactory.create(module);
  app.useLogger(app.get(NestPinoLogger));

  if (globalPrefix !== undefined) {
    app.setGlobalPrefix(globalPrefix);
  }
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}
