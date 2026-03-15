package com.example.specbackend.service;

import com.example.specbackend.dto.TaskRequest;
import com.example.specbackend.exception.ResourceNotFoundException;
import com.example.specbackend.model.Project;
import com.example.specbackend.model.Task;
import com.example.specbackend.repository.ProjectRepository;
import com.example.specbackend.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService{
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public Task createTask(Long projectId, TaskRequest request) {

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found"));

        Task task = new Task();
        task.setTitle(request.getTitle());
        task.setCompleted(false);
        task.setProject(project);

        return taskRepository.save(task);
    }

    @Override
    public List<Task> getTasksByProject(Long projectId) {

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found"));

        return taskRepository.findByProject(project);
    }

    @Override
    public Task toggleTask(String taskId) {

        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found"));

        task.setCompleted(!task.isCompleted());

        return taskRepository.save(task);
    }

    @Override
    public void deleteTask(String taskId) {

        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found"));

        taskRepository.delete(task);
    }
}
