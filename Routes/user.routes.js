import { Router } from "express";
import { getUser, getUsers } from "../cantrollers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => res.send({ title: "Create new user" }));

userRouter.put("/:id", (req, res) =>
  res.send({ title: "update that id user" }),
);

userRouter.delete("/:id", (req, res) =>
  res.send({ title: "delete that user" }),
);

export default userRouter;
