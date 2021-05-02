import { Application, Request, Response } from "express";

interface IError {
  message: string;
  httpStatusCode: number;
}

const ErrorHandlers = (error: IError, req: Request, res: Response) => {
  return res
    .status(error.httpStatusCode)
    .json({ message: error.message, code: error.httpStatusCode });
};

export default function (app: Application) {
  app.use(ErrorHandlers);
}
