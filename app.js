import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./Routes/user.routes.js";
import authRoutes from "./Routes/auth.routes.js";
import subscriptionRouter from "./Routes/subscription.route.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";
import workflowRouter from "./Routes/workflow.route.js";

const app = express();

//Parses/allow JSON data coming from the client (frontend)
app.use(express.json()); // allow to send json data as req to api

// rerarely used nowadays only if making frontend make using html
app.use(express.urlencoded({ extended: false })); //Parses form data (from HTML forms)

app.use(arcjetMiddleware);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflows", workflowRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to my subsription page api");
});

app.listen(PORT, async () => {
  console.log(`server is running on http://localhost:/${PORT}`);
  await connectToDatabase();
});

export default app;
