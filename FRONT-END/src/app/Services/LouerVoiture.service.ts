import { NgForm } from "@angular/forms";
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LouerVoiture } from "../louer-voiture/louerVoiture";



@Injectable({
  providedIn:'root'
})

export class LouerVoitureService{
    public LouerVoiture:LouerVoiture=new LouerVoiture();


    private louerVoitures:LouerVoiture[]=[
        
        
      ]
      
    constructor(private httpClient:HttpClient ){

    }
    Ajouter(louerVoiture:LouerVoiture):Observable<LouerVoiture>{
        return this.httpClient.post<LouerVoiture>("http://localhost:8084/LouerVoiture/ajouterLouerVoiture",louerVoiture);
    }
    
    supprimerParId(louerVoiture:LouerVoiture):Observable<String>{
      return this.httpClient.delete(`http://localhost:8084/LouerVoiture/deleteLouerVoiture/`+louerVoiture.id,{responseType:'text'});
    }
    

    Modifier(louerVoiture:LouerVoiture):Observable<LouerVoiture>{
      return this.httpClient.put<LouerVoiture>("http://localhost:8084/LouerVoiture/updateLouerVoiture/",louerVoiture)
    }

    public getAll():Observable<LouerVoiture[]>{
        return this.httpClient.get<LouerVoiture[]>("http://localhost:8084/LouerVoiture/getAllLouerVoitures");
      }
}