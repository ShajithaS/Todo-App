import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects , createProject } from "../services/projectService";
import Navbar from "../components/Navbar";
import "../styles/ProjectsPage.css";

function ProjectsPage() {

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");

  const userId = localStorage.getItem("userId");

  // Fetch projects
  const fetchProjects = async () => {

    try {

      const response = await getProjects(userId);

      setProjects(response.data);

    } catch (error) {
      console.error("Error fetching projects");
    }

  };

  useEffect(() => {
    if(!userId) {
      navigate("/login");
    }
    fetchProjects();
  }, [userId]);

  // Create project
  const handleCreateProject = async (e) => {

    e.preventDefault();

    try {

      await createProject(userId, {
        name: title
      });

      setTitle("");

      fetchProjects();

    } catch (error) {
      console.error("Error creating project");
    }

  };

  return (
<>
  <Navbar />
    <div className="projects-container">

      <h2>My Projects</h2>

      {/* Add Project */}

      <form
        onSubmit={handleCreateProject}
        className="project-input"
      >

        <input
          type="text"
          placeholder="New Project Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <button type="submit">
          Add Project
        </button>

      </form>

      {/* Project List */}

      <div className="project-list">

        {projects.map((project) => (

          <div
            key={project.id}
            className="project-card"
            onClick={() =>
              navigate(`/projects/${project.id}/tasks`)
            }
          >

            {project.name}

          </div>

        ))}

      </div>

    </div>
    </>

  );
}

export default ProjectsPage;