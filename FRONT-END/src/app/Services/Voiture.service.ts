import { NgForm } from "@angular/forms";
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Voiture } from "../voiture/Voiture";




@Injectable({
  providedIn:'root'
})

export class VoitureService{
    public voiture:Voiture=new Voiture();


    private voitures:Voiture[]=[
        
        
      ]
      
    constructor(private httpClient:HttpClient ){

    }
    Ajouter(voiture:Voiture):Observable<Voiture>{
        return this.httpClient.post<Voiture>("http://localhost:8084/Voiture/ajouterVoiture",voiture);
    }
    
    supprimerParId(voiture:Voiture):Observable<String>{
      return this.httpClient.delete(`http://localhost:8084/Voiture/deleteVoiture/`+voiture.id,{responseType:'text'});
    }
    

    Modifier(voiture:Voiture):Observable<Voiture>{
      return this.httpClient.put<Voiture>("http://localhost:8084/Voiture/updateVoiture/",voiture)
    }

    public getAll():Observable<Voiture[]>{
        return this.httpClient.get<Voiture[]>("http://localhost:8084/Voiture/getAllVoitures");
      }
}