import sslRedirect from "heroku-ssl-redirect";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import winston from "winston";
import "winston-mongodb";
import userRouter from "./routers/userRouter";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 3001;

dotenv.config();

let mainDbStatus = false;
let oCDbStatus = false;

const connectToDBs = () => {
  mongoose.connect(
    "" + process.env.MONGO,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions,
    (err) => {
      if (err) return console.error(err);
      console.log("Connected to Main MongoDB");
      mainDbStatus = true;
    }
  );
  try {
    const mongoTransport = winston.add(
      new winston.transports.MongoDB({
        db: "" + process.env.MONGO_OC,
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      })
    );

    const logger = winston.createLogger({
      level: "info",
      format: winston.format.json(),
      defaultMeta: { service: "user-service" },
      transports: [mongoTransport],
    });
    oCDbStatus = true;
  } catch (err) {
    console.log(err);
    oCDbStatus = false;
  }
  if (!mainDbStatus || !oCDbStatus) setTimeout(connectToDBs, 180000);
};

connectToDBs();

app.use(sslRedirect());
app.use(express.json());

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? ["http://localhost:3000"]
        : ["https://join.neurobica.online"],
    credentials: true,
  })
);

app.use(cookieParser());

/*
const logReq = (req: Request<{}, any, any, Record<string, any>>) =>
  logger.log({
    level: "warn",
    message:
      "Req: " +
      JSON.stringify({
        headers: req.headers,
        method: req.method,
        url: req.url,
        httpVersion: req.httpVersion,
        body: req.body,
        cookies: req.cookies,
        path: req.path,
        protocol: req.protocol,
        query: req.query,
        hostname: req.hostname,
        ip: req.ip,
        originalUrl: req.originalUrl,
        params: req.params,
      }),
  }); */

app.listen(port, () => console.log(`Server started on port: ${port}`));

app.use((_, res, next) => {
  if (mainDbStatus || oCDbStatus) next();
  else
    res
      .status(500)
      .json({ serverError: "Server is down now. Please try again later." });
});

app.use("/user", userRouter);
app.get("/areyoualive", (_, res) => res.json({ answer: "yes" }));
