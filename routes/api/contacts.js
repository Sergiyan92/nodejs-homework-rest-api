const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addJoiSchema),
  ctrl.addContacts
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addJoiSchema),
  ctrl.updateContacts
);
router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.patchJoiSchema),
  ctrl.updateStatusContact
);
router.delete("/:id", authenticate, isValidId, ctrl.deleteContacts);

module.exports = { router };
