package com.locationVoiture.locationVoiture.Models;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "Locataire")
@DiscriminatorColumn(name="LocataireType")
public class Locataire extends Personne{


	public Locataire(Long id, String nom, String prenom, String adresse, int numtel,
			Set<LouerVoiture> listeLocationsLocataire) {
		super(id, nom, prenom, adresse, numtel);
		this.listeLocationsLocataire = listeLocationsLocataire;
	}
	
	
	

	public Locataire() {
	
	}



	@OneToMany(mappedBy = "locataireLouer",fetch = FetchType.LAZY)
    @JsonManagedReference(value="locataireLouerVoiture")
   	private Set<LouerVoiture> listeLocationsLocataire;


	public Set<LouerVoiture> getListeLocationsLocataire() {
		return listeLocationsLocataire;
	}

	public void setListeLocationsLocataire(Set<LouerVoiture> listeLocationsLocataire) {
		this.listeLocationsLocataire = listeLocationsLocataire;
	}
    
    
}
