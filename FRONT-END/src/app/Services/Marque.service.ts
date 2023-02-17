import { NgForm } from "@angular/forms";
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Marque } from "../marque/Marque";


@Injectable({
  providedIn:'root'
})

export class MarqueService{
    public marque:Marque=new Marque();


    private marques:Marque[]=[
        
        
      ]
      
    constructor(private httpClient:HttpClient ){

    }
    Ajouter(marque:Marque):Observable<Marque>{
        return this.httpClient.post<Marque>("http://localhost:8084/Marque/ajouterMarque",marque);
    }
    
    supprimerParId(marque:Marque):Observable<String>{
      return this.httpClient.delete(`http://localhost:8084/Marque/deleteMarque/`+marque.id,{responseType:'text'});
    }
    

    Modifier(marque:Marque):Observable<Marque>{
      return this.httpClient.put<Marque>("http://localhost:8084/Marque/updateMarque/",marque)
    }

    public getAll():Observable<Marque[]>{
        return this.httpClient.get<Marque[]>("http://localhost:8084/Marque/getAllMarques");
      }
}