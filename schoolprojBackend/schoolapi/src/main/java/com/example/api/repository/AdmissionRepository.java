package com.example.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.api.model.AdmissionForm;

public interface AdmissionRepository extends JpaRepository<AdmissionForm, Long> {
    AdmissionForm findByStudentUniqueId(String studentUniqueId);
}
