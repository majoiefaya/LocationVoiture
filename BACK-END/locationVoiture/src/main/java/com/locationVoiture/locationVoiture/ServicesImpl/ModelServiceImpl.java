package com.locationVoiture.locationVoiture.ServicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.locationVoiture.locationVoiture.Models.Model;
import com.locationVoiture.locationVoiture.Repository.ModelRepository;
import com.locationVoiture.locationVoiture.Services.ModelService;

@Service
public class ModelServiceImpl implements ModelService{
	@Autowired
	public ModelRepository modelRepository;
	
	@Override
	public Model saveModel(Model model) {
		// TODO Auto-generated method stub
		return this.modelRepository.save(model);
	}

	@Override
	public Model updateModel(Model model) {
		// TODO Auto-generated method stub
		return this.modelRepository.save(model);
	}

	@Override
	public String deleteModelById(Long id) {
		// TODO Auto-generated method stub
		this.modelRepository.deleteById(id);
		return  "Model Supprimé avec succes !";
	}

	@Override
	public String deleteModelByObject(Model model) {
		// TODO Auto-generated method stub
		this.modelRepository.deleteById(model.getId());
		return "Model Supprimé avec succes !";
	}

	@Override
	public List<Model> getAllModel() {
		// TODO Auto-generated method stub
		return this.modelRepository.findAll();
	}

	@Override
	public Model findModelById(Long id) {
		// TODO Auto-generated method stub
		return this.modelRepository.findById(id).orElse(null);
	}


}
