# Task Manager API

The Task Manager API is a RESTful API for managing tasks and users in a task management system. It provides endpoints to create tasks, view tasks, filter tasks, delete tasks, edit tasks, change task status, and add users.

## Features

- Create tasks with a name, due date, and status.
- View a list of all tasks.
- Filter tasks by name, status, and due date.
- Delete a task by ID.
- Edit task details.
- Change the status of a task.
- Add users to the system.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose


## Prerequisites

- Node.js (version 12 or above)
- MongoDB (installed and running)

## Getting Started

1. Clone the repository:

   ```shell
   git clone <https://github.com/satyaveer1994/task-manager.git>


1.Install the dependencies: 

    npm install

2.Set up the MongoDB connection:   
 . Ensure MongoDB is running on your system.
 .Update the MongoDB connection URL in the .env file, if necessary.

3.Start the server:

    nodemon src/index.js

    The server will start running at http://localhost:3000.


## API Endpoints

# Tasks

    GET /api/tasks: Retrieve a list of all tasks. You can use the following query parameters to filter tasks:
        name: Filter tasks by name (partial match).
        status: Filter tasks by status (e.g., "Pending" or "Completed").
        dueDate: Filter tasks by due date (in YYYY-MM-DD format).
    POST /api/tasks: Create a new task. The request body should include the task name, due date, and status.
    DELETE /api/tasks/:id: Delete a task by ID.
    PUT /api/tasks/:id: Update a task by ID. The request body should include the updated task details.
    PATCH /api/tasks/:id: Change the status of a task by ID. The request body should include the updated status.



# Users

    POST /api/users: Create a new user. The request body should include the user name.

## Error Handling

Proper error handling is implemented for invalid requests, server errors, and resource not found scenarios. The API returns appropriate HTTP status codes and error messages.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License


.This project is licensed under the MIT License.


    Please make sure to customize the README.md file according to your specific project details, including the installation instructions, endpoints, and any other relevant information.
