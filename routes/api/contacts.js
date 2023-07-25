const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addJoiSchema), ctrl.addContacts);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addJoiSchema),
  ctrl.updateContacts
);
router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.patchJoiSchema),
  ctrl.updateStatusContact
);
router.delete("/:id", isValidId, ctrl.deleteContacts);

module.exports = { router };
