import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { DeleteAnnonceComponent } from './delete-annonce/delete-annonce.component';
import { DetailAnnonceComponent } from './detail-annonce/detail-annonce.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { NoutfoundComponent } from './noutfound/noutfound.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListeAnnonceComponent,
    AddAnnonceComponent,
    UpdateAnnonceComponent,
    DeleteAnnonceComponent,
    DetailAnnonceComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NoutfoundComponent,
    AcceuilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
