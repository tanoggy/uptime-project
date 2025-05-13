import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | string[] = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      message =
        typeof res === 'string'
          ? res
          : (res as any).message || (res as any).error || message;
    } else if (exception?.code === 'P2002') {
      // Prisma unique constraint violation
      status = 409;
      message = `Duplicate value for unique field: ${exception.meta?.target?.join(', ')}`;
    } else if (exception?.message) {
      message = exception.message;
    }

    response.status(status).json({
      status: 'error',
      message,
      data: {},
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
} 