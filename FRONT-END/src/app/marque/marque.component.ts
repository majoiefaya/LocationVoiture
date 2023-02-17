import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../Services/Marque.service';
import { Marque } from './Marque';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit{
  
  affichage:boolean=true;

  testId:boolean=false;

  marques:Marque[]=[];
  

  marque=this.marqueService.marque;



  public nbremarques=0;
  message:string="";
  isafficherMessageChargement:boolean=true;
  alertColor:string="";
  
  constructor(
    private marqueService:MarqueService,
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

  afficherListeMarques(){
    this.affichage=true;
  }

  SauvegardeMarque(){
    if(this.testId==false){
      this.Ajoutermarque();
    }else{
      this.ModifierUnmarque();
      this.testId=false;
    }
  }

  UpdateMarque(marqueUpdate:Marque){
    this.marque=marqueUpdate;
    this.testId=true;
    this.affichage=false;
   }

  Ajoutermarque(){
    this.isafficherMessageChargement=true;
    setTimeout(()=>{
      console.log(this.marque)
      this.marqueService.Ajouter(this.marque).subscribe(
        (reponse:Marque)=>{
          this.isafficherMessageChargement=false;
          this.affichage=true;
          this.getAll();
          this.marque=new Marque();
          console.log(reponse);
        },(error)=>{
          this.affichage=false;
          this.alertColor="alert alert-danger";
          this.message="Erreur d'Ajout de données";
          this.isafficherMessageChargement=true;
          console.log(this.marque);
        },
        ()=>{
          this.isafficherMessageChargement=false;
        }
      );
    },4000)
    
  }

  ModifierUnmarque(){
    setTimeout(()=>{
      this.marqueService.Modifier(this.marque).subscribe(
        (reponse:Marque)=>{
        this.marque=new Marque();
        this.affichage=true;
        console.log(reponse);
        }
      ); 
    },4000)
  }

  supprimerMarque(marque:Marque){
    this.marqueService.supprimerParId(marque).subscribe(
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
    this.marqueService.getAll().subscribe(
      (reponse:Marque[])=>{
        this.isafficherMessageChargement=false;
        this.marques=reponse;
        this.nbremarques=this.marques.length;
        console.log(this.marques);    
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

