package com.example.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.api.model.Announcement;

public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
}
