let { collection } = require("../config/db");
exports.store = async (req, res) => {
  try {
    let { firstName, lastName, email } = req.body;
    let findOne = await collection.user.findOne({
      email,
    });
    if (findOne) {
      return res.status(400).json({
        code: 400,
        status: "error",
        message: ["Email already exists"],
      });
    }
    await collection.user.insertOne({
      _id: 1,
      firstName,
      lastName,
      email,
    });
    res.json({
      code: 201,
      status: "success",
      message: ["Data inserted successfully"],
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      status: "error",
      message: [err.message],
    });
  }
};

exports.info = async (req, res) => {
  try {
    let { email } = req.params;
    let data = await collection.user.findOne({
      email,
    });
    if (!data) {
      return res.status(404).json({
        code: 404,
        status: "error",
        message: ["User not found"],
      });
    }
    res.json({
      code: 200,
      status: "success",
      message: data,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      status: "error",
      message: [err.message],
    });
  }
};
