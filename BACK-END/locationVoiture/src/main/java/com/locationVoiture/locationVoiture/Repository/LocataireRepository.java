package com.locationVoiture.locationVoiture.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.locationVoiture.locationVoiture.Models.Locataire;

public interface LocataireRepository extends JpaRepository<Locataire, Long>{
	 public Locataire findBynom(String nom);
}
