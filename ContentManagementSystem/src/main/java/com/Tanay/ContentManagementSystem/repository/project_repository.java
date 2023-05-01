package com.Tanay.ContentManagementSystem.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Tanay.ContentManagementSystem.models.fetch_projects;

public interface project_repository extends MongoRepository<fetch_projects, String> {
    
}
