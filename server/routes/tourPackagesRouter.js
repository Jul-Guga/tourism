const express = require("express");
const router = express.Router();
const {
  getPackages,
  setPackages,
  updatePackage,
  deletePackage,
} = require("../controllers/tourPackagesController");
const { protect } = require("../middlewares/authMiddleware");

router.route("/").get(getPackages).post(protect, setPackages);
router.route("/:id").put(protect, updatePackage).delete(protect, deletePackage);

module.exports = router;
