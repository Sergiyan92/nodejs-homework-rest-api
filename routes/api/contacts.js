const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const schema = require("../../schemas/contacts");

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(schema.addJoiSchema), ctrl.addContacts);

router.put("/:id", validateBody(schema.addJoiSchema), ctrl.updateContacts);

router.delete("/:id", ctrl.deleteContacts);

module.exports = router;
