import { LouerVoiture } from "../louer-voiture/louerVoiture";
import { Marque } from "../marque/Marque";
import { Model } from "../model/Model";
import { Proprietaire } from "../proprietaire/Proprietaire";

export class Voiture{

	public  id!:number;
	
	
	public  libelleVoiture!:string;
	

	public  couleur!:string;
	

	public  statut:string="Disponible";
	

	public  nombreSiege!:number;
	

	public  image!:string;
	

	public  motorisation!:string;
	

    public voitureProprietaire!:Proprietaire;
    
    
   	public listeLocationsVoiture!:LouerVoiture[];
    

    public  voitureMarque!:Marque;


    public  voitureModel!:Model;
}