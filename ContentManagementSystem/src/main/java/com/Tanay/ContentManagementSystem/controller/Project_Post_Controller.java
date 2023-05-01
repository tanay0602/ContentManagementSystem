package com.Tanay.ContentManagementSystem.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Tanay.ContentManagementSystem.models.fetch_projects;
import com.Tanay.ContentManagementSystem.repository.project_repository;
import com.Tanay.ContentManagementSystem.repository.search_repository;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import springfox.documentation.annotations.ApiIgnore;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Project_Post_Controller{

@Autowired
project_repository repo;
@Autowired
search_repository search_repo;

@ApiIgnore
    @RequestMapping("/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui/");
      }


    @GetMapping("/allProjects")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<fetch_projects> getAllProjects(){

        return repo.findAll();
    }

    @GetMapping("/projects/{text}")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<fetch_projects> search(@PathVariable String text){

        return search_repo.findByText(text);
    }


    @PostMapping("/addProject")
    @CrossOrigin(origins = "http://localhost:3000")
    public fetch_projects addProject(@RequestBody fetch_projects project){

        return repo.save(project);
    }

    
}