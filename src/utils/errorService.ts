import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ErrorEnum } from "../models";

export class ErrorService {
	static error(
		res: Response,
		errors: any,
		statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR,
		message: string | null = null
	): void {
		if (StatusCodes.INTERNAL_SERVER_ERROR && !message) {
			message = ErrorEnum.errorServer;
		}

		res.status(statusCode).json({
			status: statusCode,
			message: message ?? ErrorEnum.invalidData,
			errors: errors,
		});
	}
}
