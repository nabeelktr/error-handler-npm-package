import { CustomError } from "../base/custom.error";

export class NotFoundError extends CustomError {
  statusCode: 404;

  constructor() {
    super("Not Found Error.");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: "Request resource not found." }];
  }
}
