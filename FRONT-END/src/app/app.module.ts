import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenuComponent } from './contenu/contenu.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { VoitureComponent } from './voiture/voiture.component';
import { LocataireComponent } from './locataire/locataire.component';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { PersonneComponent } from './personne/personne.component';
import { LouerVoitureComponent } from './louer-voiture/louer-voiture.component';
import { MarqueComponent } from './marque/marque.component';
import { ModelComponent } from './model/model.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ImageComponent } from './image/image.component';
import { CorsInterceptor } from './cors.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ContenuComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    AccueilComponent,
    VoitureComponent,
    LocataireComponent,
    ProprietaireComponent,
    PersonneComponent,
    LouerVoitureComponent,
    MarqueComponent,
    ModelComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
