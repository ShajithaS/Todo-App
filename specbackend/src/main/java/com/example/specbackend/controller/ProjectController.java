package com.example.specbackend.controller;
import com.example.specbackend.model.Project;
import com.example.specbackend.model.User;
import com.example.specbackend.repository.ProjectRepository;
import com.example.specbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
@CrossOrigin("*")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/{userId}")
    public Project createProject(@PathVariable Long userId,
                                 @RequestBody Project project){

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        project.setUser(user);

        return projectRepository.save(project);
    }

    @GetMapping("/{userId}")
    public List<Project> getProjects(@PathVariable Long userId){

        User user = userRepository.findById(userId).orElseThrow();

        return projectRepository.findByUser(user);
    }
}
