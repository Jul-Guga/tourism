const express = require("express");
const router = express.Router();
const {
  registerOperator,
  loginOperator,
  getOperator,
} = require("../controllers/operatorController");

router.post("/", registerOperator);
router.post("/login", loginOperator);
router.get("/me", getOperator);

module.exports = router;
