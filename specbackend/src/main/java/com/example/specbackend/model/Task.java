package com.example.specbackend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
@Table(name="tasks")
public class Task {
    @Id
    private String id;

    private String title;
    private boolean completed;

    @ManyToOne
    @JoinColumn(name="project_id")
    private Project project;

    public Task(){
        this.id = UUID.randomUUID().toString();
    }


}
