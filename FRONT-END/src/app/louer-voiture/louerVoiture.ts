import { Locataire } from "../locataire/Locataire";
import { Voiture } from "../voiture/Voiture";

export class LouerVoiture{
    
	public id!:number;

    public voitureLouer!:Voiture;

    public locataireLouer!:Locataire;
	    
	public dateLocation!:Date;
}