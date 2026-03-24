import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../cantrollers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "get all subscription" });
});

subscriptionRouter.get("/:id", authorize, getUserSubscriptions);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "update subscription" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "delete subscription" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "get all subscription for specific user " });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "cancel subscription " });
});
subscriptionRouter.put("/upcoming-renewal", (req, res) => {
  res.send({ title: " Get upcoming renewal subscription update give" });
});

export default subscriptionRouter;
