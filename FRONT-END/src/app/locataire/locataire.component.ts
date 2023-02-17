import { Component, OnInit } from '@angular/core';
import { LocataireService } from '../Services/locataire.service';
import { Locataire } from './Locataire';

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.css']
})
export class LocataireComponent  implements OnInit{
  
  affichage:boolean=true;

  testId:boolean=false;

  locataires:Locataire[]=[];
  

  locataire=this.locataireService.locataire;



  public nbreLocataires=0;
  message:string="";
  isafficherMessageChargement:boolean=true;
  alertColor:string="";
  
  constructor(
    private locataireService:LocataireService,
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

  afficherListeLocataires(){
    this.affichage=true;
  }

  SauvegardeLocataire(){
    if(this.testId==false){
      this.AjouterLocataire();
    }else{
      this.ModifierUnLocataire();
      this.testId=false;
    }
  }

  UpdateLocataire(LocataireUpdate:Locataire){
    this.locataire=LocataireUpdate;
    this.testId=true;
    this.affichage=false;
   }

  AjouterLocataire(){
    this.isafficherMessageChargement=true;
    setTimeout(()=>{
      console.log(this.locataire)
      this.locataireService.Ajouter(this.locataire).subscribe(
        (reponse:Locataire)=>{
          this.isafficherMessageChargement=false;
          this.affichage=true;
          this.getAll();
          this.locataire=new Locataire();
          console.log(reponse);
        },(error)=>{
          this.affichage=false;
          this.alertColor="alert alert-danger";
          this.message="Erreur d'Ajout de données";
          this.isafficherMessageChargement=true;
          console.log(this.locataire);
        },
        ()=>{
          this.isafficherMessageChargement=false;
        }
      );
    },4000)
    
  }

  ModifierUnLocataire(){
    setTimeout(()=>{
      this.locataireService.Modifier(this.locataire).subscribe(
        (reponse:Locataire)=>{
        this.locataire=new Locataire();
        this.affichage=true;
        console.log(reponse);
        }
      ); 
    },4000)
  }

  supprimerLocataire(Locataire:Locataire){
    this.locataireService.supprimerParId(Locataire).subscribe(
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
    this.locataireService.getAll().subscribe(
      (reponse:Locataire[])=>{
        this.isafficherMessageChargement=false;
        this.locataires=reponse;
        this.nbreLocataires=this.locataires.length;
        console.log(this.locataires);    
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

