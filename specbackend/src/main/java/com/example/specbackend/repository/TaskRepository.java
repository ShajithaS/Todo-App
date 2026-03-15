package com.example.specbackend.repository;

import com.example.specbackend.model.Project;
import com.example.specbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.specbackend.model.Task;

import java.util.List;

public interface TaskRepository  extends JpaRepository<Task,String> {
    List<Task> findByProject(Project project);
}
