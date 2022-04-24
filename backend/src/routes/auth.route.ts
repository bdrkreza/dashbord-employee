import { authController } from "../controllers";

const { Router } = require("express");

const router = Router();

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

export default router;
