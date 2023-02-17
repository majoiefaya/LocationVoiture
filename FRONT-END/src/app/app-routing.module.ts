import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LocataireComponent } from './locataire/locataire.component';
import { LouerVoitureComponent } from './louer-voiture/louer-voiture.component';
import { MarqueComponent } from './marque/marque.component';
import { ModelComponent } from './model/model.component';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { VoitureComponent } from './voiture/voiture.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'voiture',component:VoitureComponent},
  {path:'marque',component:MarqueComponent},
  {path:'model',component:ModelComponent},
  {path:'locataire',component:LocataireComponent},
  {path:'proprietaire',component:ProprietaireComponent},
  {path:'locations',component:LouerVoitureComponent},
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
