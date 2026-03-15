package com.example.specbackend.model;

import jakarta.persistence.*;
import lombok.Data;
@Table(name="projects")
@Entity
@Data

public class Project
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    public Project(){}

}
