package com.example.api.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.api.model.Marks;
import com.example.api.service.MarksService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/marks")
public class MarksController {

    @Autowired
    private MarksService marksService;

    @PostMapping
    public Marks giveMarks(@RequestBody Marks marks) {
        return marksService.saveMarks(marks);
    }

    @GetMapping
    public List<Marks> getAllMarks() {
        return marksService.getAllMarks();
    }

    @GetMapping("/{studentUniqueId}")
    public List<Marks> getMarksByStudentUniqueId(@PathVariable String studentUniqueId) {
        return marksService.getMarksByStudentUniqueId(studentUniqueId);
    }
}
