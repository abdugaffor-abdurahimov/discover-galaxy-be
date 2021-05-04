import axios from "axios";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { nasaApiKey } from "../config";
import { ErrorService } from "../utils/errorService";

export class PostController {
	static async list(req: Request, res: Response) {
		try {
			const apodData = await axios.get(
				"https://api.nasa.gov/planetary/apod?api_key=" + nasaApiKey
			);

			if (apodData.status === StatusCodes.OK) {
				res.status(200).json(apodData.data);
			}
		} catch (error) {
			return ErrorService.error(res, error);
		}
	}
}
