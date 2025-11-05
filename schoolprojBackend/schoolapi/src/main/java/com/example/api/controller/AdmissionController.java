package com.example.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.api.model.AdmissionForm;
import com.example.api.service.AdmissionService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/admissions")
public class AdmissionController {

    @Autowired
    private AdmissionService admissionService;

    @PostMapping
    public AdmissionForm saveAdmission(@RequestBody AdmissionForm form) {
        return admissionService.saveAdmission(form);
    }

    @GetMapping
    public List<AdmissionForm> getAllAdmissions() {
        return admissionService.getAllAdmissions();
    }

    @GetMapping("/{studentUniqueId}")
    public AdmissionForm getByStudentUniqueId(@PathVariable String studentUniqueId) {
        return admissionService.getByStudentUniqueId(studentUniqueId);
    }
}
