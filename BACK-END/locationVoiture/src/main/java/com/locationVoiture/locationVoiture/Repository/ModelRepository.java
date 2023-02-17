package com.locationVoiture.locationVoiture.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.locationVoiture.locationVoiture.Models.Model;


public interface ModelRepository extends JpaRepository<Model, Long>{

}
