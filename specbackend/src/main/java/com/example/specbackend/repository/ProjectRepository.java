package com.example.specbackend.repository;

import com.example.specbackend.model.Project;
import com.example.specbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository  extends JpaRepository<Project, Long> {
    List<Project> findByUser(User user);
}
