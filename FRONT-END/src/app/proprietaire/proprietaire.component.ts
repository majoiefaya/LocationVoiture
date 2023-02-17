import { Component, OnInit } from '@angular/core';
import { ProprietaireService } from '../Services/Proprietaire.service';
import { Proprietaire } from './Proprietaire';

@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.component.html',
  styleUrls: ['./proprietaire.component.css']
})
export class ProprietaireComponent  implements OnInit{
  
  affichage:boolean=true;

  testId:boolean=false;

  proprietaires:Proprietaire[]=[];
  

  proprietaire=this.proprietaireService.proprietaire;



  public nbreProprietaires=0;
  message:string="";
  isafficherMessageChargement:boolean=true;
  alertColor:string="";
  
  constructor(
    private proprietaireService:ProprietaireService,
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

  afficherListeProprietaires(){
    this.affichage=true;
  }

  SauvegardeProprietaire(){
    if(this.testId==false){
      this.AjouterProprietaire();
    }else{
      this.ModifierUnProprietaire();
      this.testId=false;
    }
  }

  UpdateProprietaire(ProprietaireUpdate:Proprietaire){
    this.proprietaire=ProprietaireUpdate;
    this.testId=true;
    this.affichage=false;
   }

  AjouterProprietaire(){
    this.isafficherMessageChargement=true;
    setTimeout(()=>{
      console.log(this.proprietaire)
      this.proprietaireService.Ajouter(this.proprietaire).subscribe(
        (reponse:Proprietaire)=>{
          this.isafficherMessageChargement=false;
          this.affichage=true;
          this.getAll();
          this.proprietaire=new Proprietaire();
          console.log(reponse);
        },(error)=>{
          this.affichage=false;
          this.alertColor="alert alert-danger";
          this.message="Erreur d'Ajout de données";
          this.isafficherMessageChargement=true;
          console.log(this.proprietaire);
        },
        ()=>{
          this.isafficherMessageChargement=false;
        }
      );
    },4000)
    
  }

  ModifierUnProprietaire(){
    setTimeout(()=>{
      this.proprietaireService.Modifier(this.proprietaire).subscribe(
        (reponse:Proprietaire)=>{
        this.proprietaire=new Proprietaire();
        this.affichage=true;
        console.log(reponse);
        }
      ); 
    },4000)
  }

  supprimerProprietaire(Proprietaire:Proprietaire){
    this.proprietaireService.supprimerParId(Proprietaire).subscribe(
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
    this.proprietaireService.getAll().subscribe(
      (reponse:Proprietaire[])=>{
        this.isafficherMessageChargement=false;
        this.proprietaires=reponse;
        this.nbreProprietaires=this.proprietaires.length;
        console.log(this.proprietaires);    
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

