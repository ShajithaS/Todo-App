package com.example.specbackend.service;

import com.example.specbackend.dto.TaskRequest;
import com.example.specbackend.model.Task;

import java.util.List;

public interface TaskService {
    Task createTask(Long projectId, TaskRequest request);

    List<Task> getTasksByProject(Long projectId);

    Task toggleTask(String taskId);

    void deleteTask(String taskId);
}
