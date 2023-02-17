package com.locationVoiture.locationVoiture.ServicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.locationVoiture.locationVoiture.Models.LouerVoiture;
import com.locationVoiture.locationVoiture.Repository.LouerVoitureRepository;
import com.locationVoiture.locationVoiture.Services.LouerVoitureService;

@Service
public class LouerServiceImpl implements LouerVoitureService{
	@Autowired
	public LouerVoitureRepository louerVoitureRepository;
	
	@Override
	public LouerVoiture saveLouerVoiture(LouerVoiture louerVoiture) {
		// TODO Auto-generated method stub
		return this.louerVoitureRepository.save(louerVoiture);
	}

	@Override
	public LouerVoiture updateLouerVoiture(LouerVoiture louerVoiture) {
		// TODO Auto-generated method stub
		return this.louerVoitureRepository.save(louerVoiture);
	}

	@Override
	public String deleteLouerVoitureById(Long id) {
		// TODO Auto-generated method stub
		this.louerVoitureRepository.deleteById(id);
		return  "LouerVoiture Supprimé avec succes !";
	}

	@Override
	public String deleteLouerVoitureByObject(LouerVoiture louerVoiture) {
		// TODO Auto-generated method stub
		this.louerVoitureRepository.deleteById(louerVoiture.getId());
		return "LouerVoiture Supprimé avec succes !";
	}

	@Override
	public List<LouerVoiture> getAllLouerVoiture() {
		// TODO Auto-generated method stub
		return this.louerVoitureRepository.findAll();
	}

	@Override
	public LouerVoiture findLouerVoitureById(Long id) {
		// TODO Auto-generated method stub
		return this.louerVoitureRepository.findById(id).orElse(null);
	}



}
