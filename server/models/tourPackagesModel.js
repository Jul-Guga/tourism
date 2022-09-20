const mongoose = require("mongoose");

const packageSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "OperatorUser",
    },
    description: {
      type: String,
      required: [true, "Please add an description"],
    },
    image: {
      type: String,
      required: [true, "Please add an image url"],
    },
    images: {
      type: Array,
      required: [true, "Please add some image urls"],
    },
    price: {
      type: Number,
      required: [true, "Please add the price"],
    },
    title: {
      type: String,
      required: [true, "Please add the title"],
    },
    location: {
      type: String,
      required: [true, "Please add the location"],
    },
    rating: {
      type: Number,
      required: [true, "Please add the location"],
    },
    duration: {
      type: Number,
      required: [true, "Please add the duration"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TourPackage", packageSchema);
