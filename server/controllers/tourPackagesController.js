const asyncHandler = require("express-async-handler");

const TourPackage = require("../models/tourPackagesModel");

// @desc    Get Packages
// @route   GET /api/tour-packages
// @access  Public
const getPackages = asyncHandler(async (req, res) => {
  const tourPackages = await TourPackage.find();
  res.status(200).json(tourPackages);
});

// @desc    Set Packages
// @route   POST /api/tour-packages
// @access  Private
const setPackages = asyncHandler(async (req, res) => {
  const {
    description,
    image,
    images,
    price,
    title,
    location,
    rating,
    duration,
  } = req.body;

  if (
    !title ||
    !description ||
    !image ||
    !images ||
    !price ||
    !location ||
    !rating ||
    !duration
  ) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const tourPackage = await TourPackage.create({
    description,
    image,
    images,
    price,
    title,
    location,
    rating,
    duration,
    agent: req.agent.id,
  });

  res.status(200).json(tourPackage);
});

// @desc    Update Package
// @route   PUT /api/tour-packages/:id
// @access  Private
const updatePackage = asyncHandler(async (req, res) => {
  const tourPackage = await TourPackage.findById(req.params.id);

  if (!tourPackage) {
    res.status(400);
    throw new Error("Tour package not found");
  }

  // Check for agent
  if (!req.agent) {
    res.status(401);
    throw new Error("Agent is not found");
  }

  // Make sure the logged in agent matches the package agent
  if (tourPackage.agent.toString() !== req.agent.id) {
    res.status(401);
    throw new Error("Agent not authorized");
  }

  const updatedTourPackage = await TourPackage.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedTourPackage);
});

// @desc    Delete Package
// @route   DELETE /api/tour-packages/:id
// @access  Private
const deletePackage = asyncHandler(async (req, res) => {
  const tourPackage = await TourPackage.findById(req.params.id);

  if (!tourPackage) {
    res.status(400);
    throw new Error("Tour package not found.");
  }

  // Check for agent
  if (!req.agent) {
    res.status(401);
    throw new Error("Agent is not found");
  }

  // Make sure the logged in agent matches the package agent
  console.log("first", req.agent);

  if (tourPackage.agent.toString() !== req.agent.id) {
    res.status(401);
    throw new Error("Agent not authorized");
  }

  const deletedTourPackage = await TourPackage.deleteOne({
    _id: req.params.id,
  });

  res.status(200).json({ id: req.params.id });
});

module.exports = { getPackages, setPackages, updatePackage, deletePackage };
