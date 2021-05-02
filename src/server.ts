import express from "express";
import cors from "cors";
import helmet from "helmet";
import expressListEndpoint from "express-list-endpoints";
import routes from "./routes";

import errorHandlers from "./middlewares/errorHandlers";

import { port } from "./config";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use("/api", routes);
errorHandlers(app);

app.listen(port, () => {
  console.log(expressListEndpoint(app));

  if (process.env.NODE_ENV === "production") {
    console.log("App is running on port" + port);
  } else {
    console.log(`App is running on url http://localhost:${port}`);
  }
});
