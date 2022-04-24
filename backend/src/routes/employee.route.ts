import { EmployeeController } from "../controllers";
import upload from "../utils/fileUpload";

const { Router } = require("express");

const router = Router();

router.route("/").get(EmployeeController.getEmployee);
router.route("/").post(upload.single("image"), EmployeeController.addEmployee);

export default router;
