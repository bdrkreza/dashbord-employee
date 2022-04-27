import { ClientController } from "../controllers";
import upload from "../utils/fileUpload";

const { Router } = require("express");

const router = Router();
router.route("/").get(ClientController.getClient);
router.route("/").post(upload.single("image"), ClientController.addClient);

router
  .route("/:id")
  .get(ClientController.getClientByID)
  .delete(ClientController.deleteClientByID)
  .put(upload.single("image"), ClientController.updateClientByID);

export default router;
