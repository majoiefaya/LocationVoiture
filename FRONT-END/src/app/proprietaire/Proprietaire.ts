import { Personne } from "../personne/Personne";
import { Voiture } from "../voiture/Voiture";

export class Proprietaire extends Personne{

    public voitures!:Voiture[];
}