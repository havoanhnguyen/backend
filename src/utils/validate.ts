import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ObjectSchema, ValidationError } from 'joi';

function errorHandler(error: ValidationError) {
  let errorMessage = 'Validation failed:';
  if (error && error.isJoi && error.details && error.details.length) {
    for (let i = 0; i < error.details.length; i += 1) {
      const detail = error.details[i];
      errorMessage += ` ${detail.message}`;
    }
  }

  return errorMessage;
}

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException(errorHandler(error));
    }

    return value;
  }
}
