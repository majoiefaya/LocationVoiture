package com.locationVoiture.locationVoiture.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.locationVoiture.locationVoiture.Models.Personne;

public interface PersonneRepository extends JpaRepository<Personne, Long>{

	 public Personne findBynom(String nom);
}
