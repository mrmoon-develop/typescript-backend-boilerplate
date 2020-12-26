import UserRoute from "./user";
import { Router } from "express";

const router = Router();

router.get("/info", (req, res) => res.send("Response!"));

router.use("/user", UserRoute);

export default router;
