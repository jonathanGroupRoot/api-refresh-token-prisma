import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";

import "dotenv";

const app = express();

app.use(express.json())
app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.json({
        status: "error",
        message: error.message
    })
})

export { app };