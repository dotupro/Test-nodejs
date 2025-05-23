const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");
router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.post("/form-actions", courseController.handleFormActions);
router.get("/:id/edit", courseController.edit);
router.put("/:id", courseController.update);
router.patch("/:id/restore", courseController.restore);
router.delete("/:id/force", courseController.forceDelete);
router.delete("/:id", courseController.delete);
router.get("/:slug", courseController.show);
module.exports = router;
