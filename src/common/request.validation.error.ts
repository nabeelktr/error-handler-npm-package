import { ValidationError } from "express-validator";
import { CustomError } from "../base/custom.error";

export class RequestValidationError extends CustomError{
    statusCode = 400;

    constructor(public errors: ValidationError[]){
        super("Invalid Login Parameters.")
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        const errorsArray = this.errors.map((error) => {
            if(error.type === "field"){
                return {message: error.msg, field: error.path}
            }
            return {message: error.msg};
        });

        return errorsArray;
    }
    
}