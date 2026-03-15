package com.example.specbackend.service;

import com.example.specbackend.dto.ProjectRequest;
import com.example.specbackend.model.Project;

import java.util.List;

public interface ProjectService {
    Project createProject(Long userId, ProjectRequest request);
    List<Project> getProjectsByUser(Long userId);
    void deleteProject(Long projectId);
}
