import { Request, Response, NextFunction } from "express";
import { CustomError } from "../base/custom.error";


export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
      }
    
      const statusCode = (err as CustomError)?.statusCode || 400;
    
      const errorsArray = (err as CustomError)?.serializeErrors() || [{ message: err.message }];
    
      if (!(err as CustomError)?.statusCode){
        console.error(err);
      }
    
      res.status(statusCode).send({
        errors: errorsArray,
      });
}