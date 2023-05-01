package com.Tanay.ContentManagementSystem.repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import com.Tanay.ContentManagementSystem.models.fetch_projects;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;





@Component
public class search_repo_implementation implements search_repository{

    @Autowired
    MongoClient Client;

    @Autowired
    MongoConverter converter;

	@Override
	public List<fetch_projects> findByText(String text) {
		
        final List<fetch_projects> projects = new ArrayList<> ();

        MongoDatabase database = Client.getDatabase("CMS");
        MongoCollection<Document> collection = database.getCollection("User_Projects");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search", 
        new Document("index", "default").append("text", 
        new Document("query", text) .append("path", "COLORS"))), 
        new Document("$sort", 
        new Document("PAGE_COUNT", 1L)), 
        new Document("$limit", 10L)));

        result.forEach(doc-> projects.add(converter.read(fetch_projects.class, doc)));

        return projects;
	}
    
}