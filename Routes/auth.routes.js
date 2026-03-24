import { Router } from "express";
import { signIn, signUp } from "../cantrollers/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/sign-up", signUp);

authRoutes.post("/sign-in", signIn);

authRoutes.post("/sign-out", (req, res) => res.send({ message: "sign-out" }));

export default authRoutes;
