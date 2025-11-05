package com.example.api.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.api.model.Marks;

public interface MarksRepository extends JpaRepository<Marks, Long> {
    List<Marks> findByStudentUniqueId(String studentUniqueId);
}
