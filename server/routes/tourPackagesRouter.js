const express = require("express");
const router = express.Router();
const {
  getPackages,
  setPackages,
  updatePackage,
  deletePackage,
} = require("../controllers/tourPackagesController");

router.route("/").get(getPackages).post(setPackages);
router.route("/:id").put(updatePackage).delete(deletePackage);

module.exports = router;
