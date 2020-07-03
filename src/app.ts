import express from "express";
import * as http from "http";
import bodyParser from "body-parser";
import { initWebSockets } from "websockets";
import { default as usersRouter } from "routes/users";
import { default as messagesRouter } from "routes/messages";
import errorToJSON from "error-to-json";

const app = express();
const server = http.createServer(app);

initWebSockets(server);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", usersRouter);
app.use("/api/messages", messagesRouter);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json(errorToJSON(err));
  }
);
const PORT : string|number = process.env.PORT || 3000;
server.listen(PORT);
