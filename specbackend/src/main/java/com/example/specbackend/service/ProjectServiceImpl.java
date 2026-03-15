package com.example.specbackend.service;

import com.example.specbackend.dto.ProjectRequest;
import com.example.specbackend.exception.ResourceNotFoundException;
import com.example.specbackend.model.Project;
import com.example.specbackend.model.User;
import com.example.specbackend.repository.ProjectRepository;
import com.example.specbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Project createProject(Long userId, ProjectRequest request) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Project project = new Project();
        project.setName(request.getName());
        project.setUser(user);

        return projectRepository.save(project);
    }

    @Override
    public List<Project> getProjectsByUser(Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        return projectRepository.findByUser(user);
    }

    @Override
    public void deleteProject(Long projectId) {

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found"));

        projectRepository.delete(project);
    }
}
