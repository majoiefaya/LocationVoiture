import { Component, OnInit } from '@angular/core';
import { Locataire } from '../locataire/Locataire';
import { LocataireService } from '../Services/locataire.service';
import { LouerVoitureService } from '../Services/LouerVoiture.service';
import { VoitureService } from '../Services/Voiture.service';
import { Voiture } from '../voiture/Voiture';
import { LouerVoiture } from './louerVoiture';

@Component({
  selector: 'app-louer-voiture',
  templateUrl: './louer-voiture.component.html',
  styleUrls: ['./louer-voiture.component.css']
})
export class LouerVoitureComponent implements OnInit{
  
  affichage:boolean=true;

  testId:boolean=false;

  LouerVoitures:LouerVoiture[]=[];

  Listevoitures:Voiture[]=[];

  ListeLocataires:Locataire[]=[];

  LouerVoiture=this.louerVoitureService.LouerVoiture;



  public nbreLouerVoitures=0;
  message:string="";
  isafficherMessageChargement:boolean=true;
  alertColor:string="";
  
  constructor(
    private voitureService:VoitureService,
    private louerVoitureService:LouerVoitureService,
    private locataireService:LocataireService
    ) { }

  ngOnInit(): void {
    this.Recharger()
    this.getAll(),
    this.getAllVoitures(),
    this.getAllLocataires()
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

  afficherListeLouerVoitures(){
    this.affichage=true;
  }

  SauvegardeLouerVoiture(){
    if(this.testId==false){
      this.AjouterLouerVoiture();
    }else{
      this.ModifierUnLouerVoiture();
      this.testId=false;
    }
  }

  UpdateLouerVoiture(LouerVoitureUpdate:LouerVoiture){
    this.LouerVoiture=LouerVoitureUpdate;
    this.testId=true;
    this.affichage=false;
   }

  AjouterLouerVoiture(){
    this.isafficherMessageChargement=true;
    setTimeout(()=>{
      console.log(this.LouerVoiture)
      this.LouerVoiture.voitureLouer.statut="Loué";
      this.louerVoitureService.Ajouter(this.LouerVoiture).subscribe(
        (reponse:LouerVoiture)=>{
          this.isafficherMessageChargement=false;
          this.affichage=true;
          this.getAll();
          this.LouerVoiture=new LouerVoiture();
          console.log(reponse);
        },(error)=>{
          this.affichage=false;
          this.alertColor="alert alert-danger";
          this.message="Erreur d'Ajout de données";
          this.isafficherMessageChargement=true;
          console.log(this.LouerVoiture);
        },
        ()=>{
          this.isafficherMessageChargement=false;
        }
      );
    },4000)
    
  }

  ModifierUnLouerVoiture(){
    setTimeout(()=>{
      this.louerVoitureService.Modifier(this.LouerVoiture).subscribe(
        (reponse:LouerVoiture)=>{
        this.LouerVoiture=new LouerVoiture();
        this.affichage=true;
        console.log(reponse);
        }
      ); 
    },4000)
  }

  supprimerLouerVoiture(LouerVoiture:LouerVoiture){
    this.louerVoitureService.supprimerParId(LouerVoiture).subscribe(
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
    this.louerVoitureService.getAll().subscribe(
      (reponse:LouerVoiture[])=>{
        this.isafficherMessageChargement=false;
        this.LouerVoitures=reponse;
        this.nbreLouerVoitures=this.LouerVoitures.length;
        console.log(this.LouerVoitures);    
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


  
  getAllVoitures(){
    this.alertColor="alert alert-primary";
    this.message="Chargement en cours";
    this.isafficherMessageChargement=true;
    this.voitureService.getAll().subscribe(
      (reponse:Voiture[])=>{
        this.isafficherMessageChargement=false;
        this.Listevoitures=reponse;
        console.log(this.Listevoitures);    
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

  getAllLocataires(){
    this.alertColor="alert alert-primary";
    this.message="Chargement en cours";
    this.isafficherMessageChargement=true;
    this.locataireService.getAll().subscribe(
      (reponse:Locataire[])=>{
        this.isafficherMessageChargement=false;
        this.ListeLocataires=reponse;
        console.log(this.ListeLocataires);    
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

