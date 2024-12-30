/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoggerService, Injectable, Inject } from '@nestjs/common';
import { Logger } from 'pino';
import { PINO_LOGGER_TOKEN } from './tokens';

/**
 * Wraps the methods of nestjs LoggerService to use pino logger.
 * All types and jsdoc comments are copied from the targetting pino methods.
 */
@Injectable()
export class NestPinoLogger implements LoggerService {
  constructor(@Inject(PINO_LOGGER_TOKEN) private readonly logger: Logger) {}

  /**
   * Log at `'info'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
   * If more args follows `msg`, these will be used to format `msg` using `util.format`.
   *
   * @typeParam T: the interface of the object being serialized. Default is object.
   * @param obj: object to be serialized
   * @param msg: the log message to write
   * @param ...args: format string values when `msg` is a format string
   */
  log<T extends object>(obj: T, msg?: string, ...args: any[]): void;
  log(obj: unknown, msg?: string, ...args: any[]): void;
  log(msg: string, ...args: any[]): void;
  log(message: any, ...optionalParams: any[]) {
    this.logger.info(message, ...optionalParams);
  }

  /**
   * Log at `'fatal'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
   * If more args follows `msg`, these will be used to format `msg` using `util.format`.
   *
   * @typeParam T: the interface of the object being serialized. Default is object.
   * @param obj: object to be serialized
   * @param msg: the log message to write
   * @param ...args: format string values when `msg` is a format string
   */
  fatal<T extends object>(obj: T, msg?: string, ...args: any[]): void;
  fatal(obj: unknown, msg?: string, ...args: any[]): void;
  fatal(msg: string, ...args: any[]): void;
  fatal(message: any, ...optionalParams: any[]) {
    this.logger.fatal(message, ...optionalParams);
  }

  /**
   * Log at `'error'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
   * If more args follows `msg`, these will be used to format `msg` using `util.format`.
   *
   * @typeParam T: the interface of the object being serialized. Default is object.
   * @param obj: object to be serialized
   * @param msg: the log message to write
   * @param ...args: format string values when `msg` is a format string
   */
  error<T extends object>(obj: T, msg?: string, ...args: any[]): void;
  error(obj: unknown, msg?: string, ...args: any[]): void;
  error(msg: string, ...args: any[]): void;
  error(message: any, ...optionalParams: any[]) {
    this.logger.error(message, ...optionalParams);
  }

  /**
   * Log at `'warn'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
   * If more args follows `msg`, these will be used to format `msg` using `util.format`.
   *
   * @typeParam T: the interface of the object being serialized. Default is object.
   * @param obj: object to be serialized
   * @param msg: the log message to write
   * @param ...args: format string values when `msg` is a format string
   */
  warn<T extends object>(obj: T, msg?: string, ...args: any[]): void;
  warn(obj: unknown, msg?: string, ...args: any[]): void;
  warn(msg: string, ...args: any[]): void;
  warn(message: any, ...optionalParams: any[]) {
    this.logger.warn(message, ...optionalParams);
  }

  /**
   * Log at `'debug'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
   * If more args follows `msg`, these will be used to format `msg` using `util.format`.
   *
   * @typeParam T: the interface of the object being serialized. Default is object.
   * @param obj: object to be serialized
   * @param msg: the log message to write
   * @param ...args: format string values when `msg` is a format string
   */
  debug<T extends object>(obj: T, msg?: string, ...args: any[]): void;
  debug(obj: unknown, msg?: string, ...args: any[]): void;
  debug(msg: string, ...args: any[]): void;
  debug(message: any, ...optionalParams: any[]) {
    this.logger.debug(message, ...optionalParams);
  }

  /**
   * Log at `'trace'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
   * If more args follows `msg`, these will be used to format `msg` using `util.format`.
   *
   * @typeParam T: the interface of the object being serialized. Default is object.
   * @param obj: object to be serialized
   * @param msg: the log message to write
   * @param ...args: format string values when `msg` is a format string
   */
  verbose<T extends object>(obj: T, msg?: string, ...args: any[]): void;
  verbose(obj: unknown, msg?: string, ...args: any[]): void;
  verbose(msg: string, ...args: any[]): void;
  verbose(message: any, ...optionalParams: any[]) {
    this.logger.trace(message, ...optionalParams);
  }
}
