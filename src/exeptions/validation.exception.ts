import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
  messages: string | Record<string, any> | string[];

  constructor(response: string | Record<string, any> | string[]) {
    super(response, HttpStatus.BAD_REQUEST);
    this.messages = response;
  }
}
