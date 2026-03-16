package com.example.specbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    private User user;

    public Project(){}

}
