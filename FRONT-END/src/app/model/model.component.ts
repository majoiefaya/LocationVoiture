import { Component, OnInit } from '@angular/core';
import { ModelService } from '../Services/Model.service';
import { Model } from './Model';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent  implements OnInit{
  
  affichage:boolean=true;

  testId:boolean=false;

  models:Model[]=[];
  

  model=this.modelService.model;



  public nbreModels=0;
  message:string="";
  isafficherMessageChargement:boolean=true;
  alertColor:string="";
  
  constructor(
    private modelService:ModelService,
    ) { }

  ngOnInit(): void {
    this.Recharger()
    this.getAll()
  }

  Recharger(){
    this.alertColor="alert alert-primary";
    this.message="Chargement en cours";
    setTimeout(()=>{
      this.getAll();
    },4000)
  }
  afficherFormulaire(){
    this.affichage=false;
  }

  afficherListeModels(){
    this.affichage=true;
  }

  SauvegardeModel(){
    if(this.testId==false){
      this.AjouterModel();
    }else{
      this.ModifierUnModel();
      this.testId=false;
    }
  }

  UpdateModel(ModelUpdate:Model){
    this.model=ModelUpdate;
    this.testId=true;
    this.affichage=false;
   }

  AjouterModel(){
    this.isafficherMessageChargement=true;
    setTimeout(()=>{
      console.log(this.model)
      this.modelService.Ajouter(this.model).subscribe(
        (reponse:Model)=>{
          this.isafficherMessageChargement=false;
          this.affichage=true;
          this.getAll();
          this.model=new Model();
          console.log(reponse);
        },(error)=>{
          this.affichage=false;
          this.alertColor="alert alert-danger";
          this.message="Erreur d'Ajout de données";
          this.isafficherMessageChargement=true;
          console.log(this.model);
        },
        ()=>{
          this.isafficherMessageChargement=false;
        }
      );
    },4000)
    
  }

  ModifierUnModel(){
    setTimeout(()=>{
      this.modelService.Modifier(this.model).subscribe(
        (reponse:Model)=>{
        this.model=new Model();
        this.affichage=true;
        console.log(reponse);
        }
      ); 
    },4000)
  }

  supprimerModel(Model:Model){
    this.modelService.supprimerParId(Model).subscribe(
      (reponse:String)=>{
        this.getAll();
      },
      (error)=>{
        this.isafficherMessageChargement=true;
        this.alertColor="alert alert-danger";
        this.message="Erreur de suppression de données";
      },
      ()=>{
        this.isafficherMessageChargement=false;
      }
    );
  }

  getAll(){
    this.alertColor="alert alert-primary";
    this.message="Chargement en cours";
    this.isafficherMessageChargement=true;
    this.modelService.getAll().subscribe(
      (reponse:Model[])=>{
        this.isafficherMessageChargement=false;
        this.models=reponse;
        this.nbreModels=this.models.length;
        console.log(this.models);    
      },
      (error)=>{
        this.alertColor="alert alert-danger";
        this.message="Erreur de Recuperation de données";
      },
      ()=>{
        this.isafficherMessageChargement=false;
      }
    );
   
  }

  
}

