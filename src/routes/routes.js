const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const taskController = require("../controllers/taskController");

//Create User
router.post("/users", userController.createUser);

// Create a task
router.post("/tasks", taskController.createTask);

// Get all tasks
router.get("/tasks", taskController.getAllTasks);

// Delete a task
router.delete("/tasks/:id", taskController.deleteTask);

// Update a task
router.put("/tasks/:id", taskController.updateTask);

// Change the status of a task
router.patch("/tasks/:id", taskController.changeTaskStatus);

module.exports = router;
