package com.example.specbackend.controller;

import com.example.specbackend.model.Project;
import com.example.specbackend.model.Task;
import com.example.specbackend.repository.ProjectRepository;
import com.example.specbackend.repository.TaskRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects/{projectId}/tasks")
@CrossOrigin("*")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    // Create Task
    @PostMapping
    public Task createTask(@PathVariable Long projectId,
                           @RequestBody Task task){

        Project project = projectRepository
                .findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        task.setProject(project);

        return taskRepository.save(task);
    }

    // Get All Tasks for a Project
    @GetMapping
    public List<Task> getTasks(@PathVariable Long projectId){

        Project project = projectRepository
                .findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        return taskRepository.findByProject(project);
    }

    // Delete Task inside Project
    @DeleteMapping("/{taskId}")
    public void deleteTask(@PathVariable Long projectId,
                           @PathVariable String taskId){

        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        if(!task.getProject().getId().equals(projectId)){
            throw new RuntimeException("Task does not belong to this project");
        }

        taskRepository.delete(task);
    }
    @PutMapping("/{taskId}/toggle")
    public Task toggleTask(@PathVariable Long projectId,
                           @PathVariable String taskId) {

        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        if(!task.getProject().getId().equals(projectId)){
            throw new RuntimeException("Task does not belong to this project");
        }

        task.setCompleted(!task.isCompleted());

        return taskRepository.save(task);
    }
}