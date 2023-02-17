import { Component, OnInit } from '@angular/core';
import { Marque } from '../marque/Marque';
import { Model } from '../model/Model';
import { Proprietaire } from '../proprietaire/Proprietaire';
import { MarqueService } from '../Services/Marque.service';
import { ModelService } from '../Services/Model.service';
import { ProprietaireService } from '../Services/Proprietaire.service';
import { VoitureService } from '../Services/Voiture.service';
import { Voiture } from './Voiture';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit{
  
  affichage:boolean=true;

  testId:boolean=false;

  voitures:Voiture[]=[];
  
  ListeModeles:Model[]=[];

  Listemarques:Marque[]=[];

  ListeProprietaires:Proprietaire[]=[];

  voiture=this.voitureService.voiture;



  public nbrevoitures=0;
  message:string="";
  isafficherMessageChargement:boolean=true;
  alertColor:string="";
  
  constructor(
    private modelService:ModelService,
    private marqueService:MarqueService,
    private voitureService:VoitureService,
    private proprietaireService:ProprietaireService
    ) { }

  ngOnInit(): void {
    this.Recharger()
    this.getAllModeles(),
    this.getAllMarques(),
    this.getAllProprietaires()
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

  afficherListevoitures(){
    this.affichage=true;
  }

  Sauvegardevoiture(){
    if(this.testId==false){
      this.Ajoutervoiture();
    }else{
      this.ModifierUnvoiture();
      this.testId=false;
    }
  }

  Updatevoiture(voitureUpdate:Voiture){
    this.voiture=voitureUpdate;
    this.testId=true;
    this.affichage=false;
   }

  Ajoutervoiture(){
    this.isafficherMessageChargement=true;
    setTimeout(()=>{
      console.log(this.voiture)
      this.voitureService.Ajouter(this.voiture).subscribe(
        (reponse:Voiture)=>{
          this.isafficherMessageChargement=false;
          this.affichage=true;
          this.getAll();
          this.voiture=new Voiture();
          console.log(reponse);
        },(error)=>{
          this.affichage=false;
          this.alertColor="alert alert-danger";
          this.message="Erreur d'Ajout de données";
          this.isafficherMessageChargement=true;
          console.log(this.voiture);
        },
        ()=>{
          this.isafficherMessageChargement=false;
        }
      );
    },4000)
    
  }

  ModifierUnvoiture(){
    setTimeout(()=>{
      this.voitureService.Modifier(this.voiture).subscribe(
        (reponse:Voiture)=>{
        this.voiture=new Voiture();
        this.affichage=true;
        console.log(reponse);
        }
      ); 
    },4000)
  }

  supprimervoiture(voiture:Voiture){
    this.voitureService.supprimerParId(voiture).subscribe(
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
    this.voitureService.getAll().subscribe(
      (reponse:Voiture[])=>{
        this.isafficherMessageChargement=false;
        this.voitures=reponse;
        this.nbrevoitures=this.voitures.length;
        console.log(this.voitures);    
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


  
  getAllModeles(){
    this.alertColor="alert alert-primary";
    this.message="Chargement en cours";
    this.isafficherMessageChargement=true;
    this.modelService.getAll().subscribe(
      (reponse:Model[])=>{
        this.isafficherMessageChargement=false;
        this.ListeModeles=reponse;
        console.log(this.ListeModeles);    
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

  getAllMarques(){
    this.alertColor="alert alert-primary";
    this.message="Chargement en cours";
    this.isafficherMessageChargement=true;
    this.marqueService.getAll().subscribe(
      (reponse:Marque[])=>{
        this.isafficherMessageChargement=false;
        this.Listemarques=reponse;
        console.log(this.Listemarques);    
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

  getAllProprietaires(){
    this.alertColor="alert alert-primary";
    this.message="Chargement en cours";
    this.isafficherMessageChargement=true;
    this.proprietaireService.getAll().subscribe(
      (reponse:Proprietaire[])=>{
        this.isafficherMessageChargement=false;
        this.ListeProprietaires=reponse;
        console.log(this.ListeProprietaires);    
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

