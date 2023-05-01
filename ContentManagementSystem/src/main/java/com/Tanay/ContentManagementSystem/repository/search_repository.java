package com.Tanay.ContentManagementSystem.repository;

import java.util.List;

import com.Tanay.ContentManagementSystem.models.fetch_projects;

public interface search_repository {
    
    List<fetch_projects> findByText(String text);

}
