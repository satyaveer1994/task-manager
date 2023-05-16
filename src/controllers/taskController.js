const taskModel = require("../models/taskModel");
const userModel = require("../models/userModel");
// Create a task
const createTask = async (req, res) => {
  try {
    const { name, dueDate, status, createdBy } = req.body;
    // Validate input
    if (!name || !dueDate || !status || !createdBy) {
      return res
        .status(400)
        .send({ status: false, msg: "Missing required fields" });
    }

    const task = await taskModel.create({ name, dueDate, status, createdBy });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: error.msg });
  }
};

// Get all tasks
// Get all tasks with optional filters
const getAllTasks = async (req, res) => {
  try {
    const { name, status, dueDate } = req.query;
    const filter = {};

    // Apply filters if provided
    if (name) {
      filter.name = { $regex: name, $options: "i" };
      console.log(name);
    }
    if (status) {
      filter.status = status;
      console.log(status);
    }
    if (dueDate) {
      filter.dueDate = { $eq: new Date(dueDate) };
    }

    const tasks = await taskModel.find(filter).populate("createdBy");
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, dueDate, status } = req.body;

    const task = await taskModel.findByIdAndUpdate(
      id,
      { name, dueDate, status },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Change the status of a task
const changeTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const task = await taskModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
  changeTaskStatus,
};
