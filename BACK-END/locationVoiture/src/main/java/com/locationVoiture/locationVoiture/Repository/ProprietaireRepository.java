package com.locationVoiture.locationVoiture.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.locationVoiture.locationVoiture.Models.Proprietaire;

public interface ProprietaireRepository extends JpaRepository<Proprietaire, Long>
{
	 public Proprietaire findBynom(String nom);
}
