package com.locationVoiture.locationVoiture.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.locationVoiture.locationVoiture.Models.Locataire;


@Service
public interface LocataireService {
	
	public Locataire saveLocataire(Locataire locataire);
	
	public Locataire updateLocataire(Locataire  locataire);
	
	public String deleteLocataireById(Long id);
	
	public String deleteLocataireByObject(Locataire locataire);

	public List<Locataire> getAllLocataire();

	public Locataire findLocataireById(Long id) ;
	
	public Locataire findLocataireByNom(String nom);

}
