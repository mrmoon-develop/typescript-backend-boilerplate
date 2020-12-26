import { Router } from "express";
import { getUsersFiltered } from "../../middleware/user";

const router = Router();

router.route("/").get(getUsersFiltered);

export default router;
