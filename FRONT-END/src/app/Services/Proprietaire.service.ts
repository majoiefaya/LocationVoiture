import { NgForm } from "@angular/forms";
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Proprietaire } from "../proprietaire/Proprietaire";




@Injectable({
  providedIn:'root'
})

export class ProprietaireService{
    public proprietaire:Proprietaire=new Proprietaire();


    private proprietaires:Proprietaire[]=[
        
        
      ]
      
    constructor(private httpClient:HttpClient ){

    }
    Ajouter(proprietaire:Proprietaire):Observable<Proprietaire>{
        return this.httpClient.post<Proprietaire>("http://localhost:8084/Proprietaire/ajouterProprietaire",proprietaire);
    }
    
    supprimerParId(proprietaire:Proprietaire):Observable<String>{
      return this.httpClient.delete(`http://localhost:8084/Proprietaire/deleteProprietaire/`+proprietaire.id,{responseType:'text'});
    }
    

    Modifier(proprietaire:Proprietaire):Observable<Proprietaire>{
      return this.httpClient.put<Proprietaire>("http://localhost:8084/Proprietaire/updateProprietaire/",proprietaire)
    }

    public getAll():Observable<Proprietaire[]>{
        return this.httpClient.get<Proprietaire[]>("http://localhost:8084/Proprietaire/getAllProprietaires");
      }
}