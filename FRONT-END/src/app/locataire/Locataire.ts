import { LouerVoiture } from "../louer-voiture/louerVoiture";
import { Personne } from "../personne/Personne";

export class Locataire extends Personne{

    listeLocationsLocataire!:LouerVoiture[];
}