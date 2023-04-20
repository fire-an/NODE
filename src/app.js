import express from "express";
import mongoose from "mongoose";
import categoryRouter from "./routers/category";
import productRouter from "./routers/product";
import authRouter from "./routers/auth";

const app = express();

app.use(express.json());
app.use("/api", categoryRouter);
app.use("/api", productRouter);
app.use("/api", authRouter);

export const viteNodeApp = app;

mongoose.connect("mongodb://127.0.0.1:27017/we17309");
