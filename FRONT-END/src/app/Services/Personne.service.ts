import { NgForm } from "@angular/forms";
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Personne } from "../personne/Personne";




@Injectable({
  providedIn:'root'
})

export class PersonneService{
    public personne:Personne=new Personne();


    private personnes:Personne[]=[
        
        
      ]
      
    constructor(private httpClient:HttpClient ){

    }
    Ajouter(personne:Personne):Observable<Personne>{
        return this.httpClient.post<Personne>("http://localhost:8084/Personne/ajouterPersonne",personne);
    }
    
    supprimerParId(personne:Personne):Observable<String>{
      return this.httpClient.delete(`http://localhost:8084/Personne/deletePersonne/`+personne.id,{responseType:'text'});
    }
    

    Modifier(personne:Personne):Observable<Personne>{
      return this.httpClient.put<Personne>("http://localhost:8084/Personne/updatePersonne/",personne)
    }

    public getAll():Observable<Personne[]>{
        return this.httpClient.get<Personne[]>("http://localhost:8084/Personne/getAllPersonnes");
      }
}