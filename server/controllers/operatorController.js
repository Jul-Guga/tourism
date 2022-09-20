const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

// @desc    Register new operator
// @route   POST /api/operators
// @access  Public
const registerOperator = asyncHandler(async (req, res) => {
  res.json({ message: "Register Operator" });
});

// @desc    Authenticate an operator
// @route   POST /api/operators/login
// @access  Public
const loginOperator = asyncHandler(async (req, res) => {
  res.json({ message: "Login Operator" });
});

// @desc    Get operator data
// @route   GET /api/operators/me
// @access  Private
const getOperator = asyncHandler(async (req, res) => {
  res.json({ message: "Operator data display" });
});

module.exports = { registerOperator, loginOperator, getOperator };
