import { CustomError } from "../base/custom.error";

export class DBConnectionError extends CustomError {
  statusCode = 500 ;

  constructor() {
    super("Error connecting to database.");

    Object.setPrototypeOf(this, DBConnectionError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: "Error connecting to database" }];
  }
}
