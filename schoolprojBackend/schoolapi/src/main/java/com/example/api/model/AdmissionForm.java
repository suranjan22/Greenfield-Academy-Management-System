package com.example.api.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
public class AdmissionForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // internal DB ID

    @Column(unique = true, updatable = false)
    private String studentUniqueId; // NEW COLUMN

    private String studentName;
    private String studentClass;
    private String studentEmail;
    private String studentPhone;
    private String address;
    private String gender;
    private String guardianName;

    // Auto-generate unique ID before saving
    @PrePersist
    public void prePersist() {
        if (studentUniqueId == null || studentUniqueId.isEmpty()) {
            this.studentUniqueId = "STU-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        }
    }

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getStudentUniqueId() { return studentUniqueId; }
    public void setStudentUniqueId(String studentUniqueId) { this.studentUniqueId = studentUniqueId; }

    public String getStudentName() { return studentName; }
    public void setStudentName(String studentName) { this.studentName = studentName; }

    public String getStudentClass() { return studentClass; }
    public void setStudentClass(String studentClass) { this.studentClass = studentClass; }

    public String getStudentEmail() { return studentEmail; }
    public void setStudentEmail(String studentEmail) { this.studentEmail = studentEmail; }

    public String getStudentPhone() { return studentPhone; }
    public void setStudentPhone(String studentPhone) { this.studentPhone = studentPhone; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public String getGuardianName() { return guardianName; }
    public void setGuardianName(String guardianName) { this.guardianName = guardianName; }
}
