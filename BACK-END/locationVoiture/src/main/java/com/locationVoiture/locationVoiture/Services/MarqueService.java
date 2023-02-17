package com.locationVoiture.locationVoiture.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.locationVoiture.locationVoiture.Models.Marque;

@Service
public interface MarqueService {
	
	public Marque saveMarque(Marque marque);
	
	public Marque updateMarque(Marque  marque);
	
	public String deleteMarqueById(Long id);
	
	public String deleteMarqueByObject(Marque marque);

	public List<Marque> getAllMarque();

	public Marque findMarqueById(Long id) ;
	
}
