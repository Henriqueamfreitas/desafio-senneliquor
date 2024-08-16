import "express-async-errors";
import express, { Application, json } from "express";
import { userRouters } from "./routers";
import middlewares from "./middlewares";

const app: Application = express();
app.use(json());
app.use('/login', userRouters.userRouter)

app.use(middlewares.handleError)
export default app;