import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { nasaApiKey } from "../config";
const router = require("express").Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const naseApiUrl = `
      https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08v&api_key=${nasaApiKey}`;

    const apodData = await axios.get(naseApiUrl);

    if (apodData.status === 200) {
      return res.send(apodData.data);
    }

    res.send(apodData.statusText);
  } catch (error) {
    next(error);
  }
});

export default router;
