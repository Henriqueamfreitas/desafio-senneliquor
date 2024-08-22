import "express-async-errors";
import express, { Application, json } from "express";
import cors from "cors";
import { userRouters, medicoRouters, hospitalRouters, chamadoRouters } from "./routers";
import middlewares from "./middlewares";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../src/swagger.json";

const app: Application = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], 
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/login", userRouters.userRouter);
app.use("/medicos", medicoRouters.medicoRouter);
app.use("/hospital", hospitalRouters.hospitalRouter);
app.use("/chamados", chamadoRouters.chamadoRouter);

app.use(middlewares.handleError);

export default app;
