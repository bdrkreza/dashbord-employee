import { AuthCrl } from "../controllers";

const { Router } = require("express");

const router = Router();

router.route("/register").post(AuthCrl.register);
router.route("/login").post(AuthCrl.login);

export default router;
