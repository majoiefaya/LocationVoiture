package com.locationVoiture.locationVoiture.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.locationVoiture.locationVoiture.Models.Marque;
import com.locationVoiture.locationVoiture.Services.MarqueService;

@RestController
@RequestMapping("/Marque")
@CrossOrigin("*")
public class MarqueController {
	@Autowired
	public MarqueService marqueService;
	
	@RequestMapping(value="/ajouterMarque",method= RequestMethod.POST,headers="accept=Application/json")
	public Marque save(@RequestBody Marque marque) {
		try {
			marque=this.marqueService.saveMarque(marque);
		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return marque;
		
	}
	
	@RequestMapping(value="/getAllMarques",method= RequestMethod.GET,headers="accept=Application/json")
	public List<Marque> getAll() {
		List<Marque> marques=new ArrayList<>();
		try {
			marques=this.marqueService.getAllMarque();
		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return marques;
		
	}
	
	@RequestMapping(value="/updateMarque",method= RequestMethod.PUT,headers="accept=Application/json")
	public Marque update(@RequestBody Marque marque) {
		try {
			marque=this.marqueService.updateMarque(marque);
		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return marque;
		
	}
	
	@RequestMapping(value = "/deleteMarque", method =RequestMethod.DELETE)
	public String DeleteByObject(@RequestBody Marque marque){
		 return this.marqueService.deleteMarqueByObject(marque);
	}

	
	@RequestMapping(value = "/deleteMarque/{id}", method =RequestMethod.DELETE)
	public String DeleteById(@PathVariable("id") long id){
		 return this.marqueService.deleteMarqueById(id);
	}
	
	
	
	@RequestMapping(value = "/findMarqueById/{id}", method =RequestMethod.GET)
	public Marque findById(@PathVariable("id") long id){
		 return this.marqueService.findMarqueById(id);
	}


}
