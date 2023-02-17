import { NgForm } from "@angular/forms";
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Model } from "../model/Model";



@Injectable({
  providedIn:'root'
})

export class ModelService{
    public model:Model=new Model();


    private models:Model[]=[
        
        
      ]
      
    constructor(private httpClient:HttpClient ){

    }
    Ajouter(model:Model):Observable<Model>{
        return this.httpClient.post<Model>("http://localhost:8084/Model/ajouterModel",model);
    }
    
    supprimerParId(model:Model):Observable<String>{
      return this.httpClient.delete(`http://localhost:8084/Model/deleteModel/`+model.id,{responseType:'text'});
    }
    

    Modifier(model:Model):Observable<Model>{
      return this.httpClient.put<Model>("http://localhost:8084/Model/updateModel/",model)
    }

    public getAll():Observable<Model[]>{
        return this.httpClient.get<Model[]>("http://localhost:8084/Model/getAllModels");
      }
}