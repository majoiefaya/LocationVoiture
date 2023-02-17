import { NgForm } from "@angular/forms";
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Locataire } from "../locataire/Locataire";

@Injectable({
  providedIn:'root'
})

export class LocataireService{
    public locataire:Locataire=new Locataire();


    private Locataires:Locataire[]=[
        
        
      ]
      
    constructor(private httpClient:HttpClient ){

    }
    Ajouter(locataire:Locataire):Observable<Locataire>{
        return this.httpClient.post<Locataire>("http://localhost:8084/Locataire/ajouterLocataire",locataire);
    }
    
    supprimerParId(locataire:Locataire):Observable<String>{
      return this.httpClient.delete(`http://localhost:8084/Locataire/deleteLocataire/`+locataire.id,{responseType:'text'});
    }
    

    Modifier(locataire:Locataire):Observable<Locataire>{
      return this.httpClient.put<Locataire>("http://localhost:8084/Locataire/updateLocataire/",locataire)
    }

    public getAll():Observable<Locataire[]>{
        return this.httpClient.get<Locataire[]>("http://localhost:8084/Locataire/getAllLocataires");
      }
}