const asyncHandler = require("express-async-handler");

const TourPackage = require("../models/tourPackagesModel");

// @desc    Get Packages
// @route   GET /api/tour-packages
// @access  Private
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

  if (!title) {
    res.status(400);
    throw new Error("Please add a title field");
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
    throw new Error("Tour package not found.");
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

  const deletedTourPackage = await TourPackage.deleteOne({
    _id: req.params.id,
  });

  res.status(200).json(deletedTourPackage);
});

module.exports = { getPackages, setPackages, updatePackage, deletePackage };
