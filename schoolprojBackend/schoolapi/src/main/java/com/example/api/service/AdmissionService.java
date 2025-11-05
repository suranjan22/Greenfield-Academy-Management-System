package com.example.api.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.api.model.AdmissionForm;
import com.example.api.repository.AdmissionRepository;

@Service
public class AdmissionService {

    @Autowired
    private AdmissionRepository admissionRepository;

    public AdmissionForm saveAdmission(AdmissionForm form) {
        return admissionRepository.save(form);
    }

    public List<AdmissionForm> getAllAdmissions() {
        return admissionRepository.findAll();
    }

    public AdmissionForm getByStudentUniqueId(String studentUniqueId) {
        return admissionRepository.findByStudentUniqueId(studentUniqueId);
    }
}
