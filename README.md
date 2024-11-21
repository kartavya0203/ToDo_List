
# To-Do List Application

A simple and efficient To-Do List application built with **Node.js**, **Express**, and **MongoDB**. 
This application allows users to manage their tasks with functionalities such as creating, editing, viewing, marking tasks as complete, and deleting them.
It also supports persistence with MongoDB, ensuring that tasks are stored and retrieved even after a server restart.
# Features

- **Create Tasks**: Add tasks with a title, description, and optional due date and category.
- **View Tasks**: View a list of all tasks, including their completion status.
- **Edit Tasks**: Modify existing tasks to update titles, descriptions, and more.
- **Mark Tasks as Complete**: Update task status to complete and avoid marking completed tasks again.
- **Delete Tasks**: Remove tasks from the list when they're no longer needed.
- **Persistent Data**: Tasks are stored in a MongoDB database for persistence across sessions.
- **Error Handling**: Provides meaningful error messages and validation for task inputs.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list.git
   cd todo-list
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up MongoDB:
   - **Local MongoDB**: Make sure MongoDB is installed and running locally, or set up a MongoDB Atlas account and get your connection string.
   - Add your MongoDB connection string to the `.env` file:
     ```bash
     DB_CONNECTION=mongodb://localhost:27017/todolist
     PORT=4000
     ```

4. Run the application:
   ```bash
   node app.js
   ```

5. The server will start, and you can access the application on `http://localhost:4000`.

---

## API Endpoints

### 1. **Create Task**
- **POST** `/api/tasks/create-task`
- **Request Body**:
  ```json
  {
      "title": "Task Title",
      "description": "Detailed description of the task",
      "dueDate": "2024-12-31",
      "category": "Work"
  }
  ```

### 2. **Get All Tasks**
- **GET** `/api/tasks/list-tasks`

### 3. **Edit Task**
- **PUT** `/api/tasks/edit-task/:id`
- **Request Body**:
  ```json
  {
      "title": "Updated Task Title",
      "description": "Updated description",
      "dueDate": "2025-01-01",
      "category": "Personal"
  }
  ```

### 4. **Mark Task as Complete**
- **PATCH** `/api/tasks/mark-done/:id`

### 5. **Delete Task**
- **DELETE** `/api/tasks/delete-task/:id`

Replace `:id` with the specific task ID.

---

## Technology Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (with Mongoose)
- **Environment Variables**: dotenv
- **Validation**: Built-in error handling for input validation

---

## Folder Structure

```
/task-management
│
├── /models         # Contains the task schema
├── /controllers    # Defines the logic for handling requests
├── /routes         # Contains route definitions
├── .env            # Environment variables (e.g., MongoDB URI)
├── app.js          # Main application file
├── package.json    # Node.js dependencies
└── .gitignore      # Specifies files to ignore in version control
```

---


This README provides a detailed overview of how to use, install, and contribute to the To-Do List application. It helps users understand the project without simply copying content from other sources.
