import { EmployeeController } from "../controllers";
import upload from "../utils/fileUpload";

const { Router } = require("express");

const EmployeeRoute = () => {
  const router = Router();
  router.route("/").get(EmployeeController.getEmployee);
  router
    .route("/")
    .post(upload.single("image"), EmployeeController.addEmployee);

  router
    .route("/:id")
    .get(EmployeeController.getEmployeeByID)
    .delete(EmployeeController.deleteEmployee)
    .put(EmployeeController.updateEmployee);

  return router;
};

export default EmployeeRoute;
