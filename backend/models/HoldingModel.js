const { model } = require("mongoose");

const { HoldingsSchema } = require('../schemas/HoldingsSchemas');

const HoldingModel = new model("holding" , HoldingsSchema);

module.exports = { HoldingModel };