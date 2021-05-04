import express from "express";
import cors from "cors";
import helmet from "helmet";
import expressListEndpoint from "express-list-endpoints";

import errorHandlers from "./middlewares/errorHandlers";

import { port } from "./config";
import routers from "./routers";

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/api", routers);

errorHandlers(app);

app.listen(port, () => {
	console.log(expressListEndpoint(app));
	if (process.env.NODE_ENV === "production") {
		console.log("App is running on port" + port);
	} else {
		console.log(`App is running on url http://localhost:${port}`);
	}
});
