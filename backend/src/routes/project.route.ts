import { ProjectController } from "../controllers";
import upload from "../utils/fileUpload";

const { Router } = require("express");

const router = Router();
router.route("/").get(ProjectController.getProject);
router.route("/").post(upload.single("image"), ProjectController.addProject);

router
  .route("/:id")
  .get(ProjectController.getProjectByID)
  .delete(ProjectController.deleteProjectByID)
  .put(upload.array("image"), ProjectController.updateProjectByID);

export default router;
