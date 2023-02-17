package com.locationVoiture.locationVoiture.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.locationVoiture.locationVoiture.Models.LouerVoiture;

@Service
public interface LouerVoitureService {
	
	public LouerVoiture saveLouerVoiture(LouerVoiture louerVoiture);
	
	public LouerVoiture updateLouerVoiture(LouerVoiture  louerVoiture);
	
	public String deleteLouerVoitureById(Long id);
	
	public String deleteLouerVoitureByObject(LouerVoiture louerVoiture);

	public List<LouerVoiture> getAllLouerVoiture();

	public LouerVoiture findLouerVoitureById(Long id) ;
	
}
