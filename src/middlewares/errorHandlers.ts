import { Application, NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

interface IError extends Error {
	message: string;
	httpStatusCode: StatusCodes;
}

const badRequestHandler = (
	err: IError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err.httpStatusCode === StatusCodes.BAD_REQUEST) {
		return res
			.status(400)
			.json({ errors: err.message || "Bad Request!", code: 400 });
	}
	next(err);
};

const notFoundHandler = (
	err: IError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err.httpStatusCode === StatusCodes.NOT_FOUND) {
		return res.status(StatusCodes.NOT_FOUND).json({
			errors: err.message || "Not Found",
			code: StatusCodes.NOT_FOUND,
		});
	}
	next(err);
};

const unAuthorizedHandler = (
	err: IError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err.httpStatusCode === StatusCodes.UNAUTHORIZED) {
		return res.status(StatusCodes.UNAUTHORIZED).json({
			error: err.message || "Unauthorized",
			code: StatusCodes.UNAUTHORIZED,
		});
	}

	next(err);
};

const forbiddenHandler = (
	err: IError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err.httpStatusCode === StatusCodes.FORBIDDEN) {
		res.status(StatusCodes.FORBIDDEN).json({
			errors: err.message || "Forbidden",
			code: StatusCodes.FORBIDDEN,
		});
	}
	next(err);
};

// const getnericErrorHandler = (err: IError, req: Request, res: Response) => {
// 	if (!res.headersSent) {
// 		res.status(err.httpStatusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
// 			errors: err.message || "Internal server error",
// 			code: err.httpStatusCode || StatusCodes.INTERNAL_SERVER_ERROR,
// 		});
// 	}
// };

export default function (app: Application) {
	app.use(badRequestHandler);
	app.use(notFoundHandler);
	app.use(unAuthorizedHandler);
	app.use(forbiddenHandler);
	// app.use(getnericErrorHandler);
}
