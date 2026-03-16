import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getTasks,
  addTask,
  deleteTask,
  toggleTask,
} from "../services/taskService";
import "../styles/TasksPage.css";

function TasksPage() {
  const { projectId } = useParams();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const response = await getTasks(projectId);

      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const handleAddTask = async (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Task title cannot be empty");
      return;
    }

    try {
      await addTask(projectId, {
        title: title,
        completed: false,
      });

      setTitle("");
      setError("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task");
    }
  };

  // Toggle task completion
  const handleToggle = async (id) => {
    await toggleTask(projectId, id);

    fetchTasks();
  };

  // Delete task
  const handleDeleteTask = async () => {
    try {
      await deleteTask(projectId, taskToDelete);
      setShowPopup(false);
      setTaskToDelete(null);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task");
    }
  };

  return (
    <div className="tasks-container">
      <h2>Project Tasks</h2>

      {/* Add Task */}

      <form className="task-input" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="New Task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (e.target.value.trim() !== "") {
              setError("");
            }
          }}
          className={error ? "input-error" : ""}
        />
        {error && <span className="error-message">{error}</span>}

        <button type="submit">+ Add Task</button>
      </form>

      {/* Task List */}

      <div className="task-list">

  {tasks.length === 0 ? (
    <p className="no-tasks">📝 Create your first task</p>
  ) : (
    tasks.map((task) => (
      <div key={task.id} className="task-item">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggle(task.id)}
        />

        <span
          className={task.completed ? "task-title completed" : "task-title"}
        >
          {task.title}
        </span>

        <button
          className="delete-btn"
          onClick={() => {
            setTaskToDelete(task.id);
            setShowPopup(true);
          }}
        >
          Delete
        </button>
      </div>
    ))
  )}

</div>
      {showPopup && (
  <div className="popup-overlay">
    <div className="popup-box">

      <p>Are you sure you want to remove this task?</p>

      <div className="popup-buttons">
        <button
          className="cancel-btn"
          onClick={() => setShowPopup(false)}
        >
          Cancel
        </button>

        <button
          className="confirm-delete-btn"
          onClick={handleDeleteTask}
        >
          Delete
        </button>
      </div>

    </div>
  </div>
)}
    </div>
  );
}

export default TasksPage;
