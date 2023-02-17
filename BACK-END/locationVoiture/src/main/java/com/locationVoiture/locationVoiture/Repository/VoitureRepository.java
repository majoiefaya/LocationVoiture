package com.locationVoiture.locationVoiture.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.locationVoiture.locationVoiture.Models.Voiture;

public interface VoitureRepository extends JpaRepository<Voiture, Long>{

}
