package com.locationVoiture.locationVoiture.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.locationVoiture.locationVoiture.Models.Voiture;

@Service
public interface VoitureService {

	public Voiture saveVoiture(Voiture voiture);
	
	public Voiture updateVoiture(Voiture  voiture);
	
	public String deleteVoitureById(Long id);
	
	public String deleteVoitureByObject(Voiture voiture);

	public List<Voiture> getAllVoiture();

	public Voiture findVoitureById(Long id) ;

}
