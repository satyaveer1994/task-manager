const userModel = require("../models/userModel");

// Create a user
const createUser = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .send({ status: false, msg: "Missing required fields" });
    }

    const user = await userModel.create({ name });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: error.msg });
  }
};

module.exports = { createUser };
