import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateAnnonceComponent} from "./update-annonce/update-annonce.component";
import {AddAnnonceComponent} from "./add-annonce/add-annonce.component";
import {DeleteAnnonceComponent} from "./delete-annonce/delete-annonce.component";
import {ListeAnnonceComponent} from "./liste-annonce/liste-annonce.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {NoutfoundComponent} from "./noutfound/noutfound.component";
import {DetailAnnonceComponent} from "./detail-annonce/detail-annonce.component";

const routes: Routes = [
  {path:"",component:AcceuilComponent},
 // {path:"departments",redirectTo:"/department",pathMatch:"full"}, //prefix or full
  {path:"annonce/list",component:ListeAnnonceComponent},
  {path:"update/:id",component:UpdateAnnonceComponent},
  {path:"annonce/add",component:AddAnnonceComponent},
  {path:"annonce/delete/:id",component:DeleteAnnonceComponent},
  {path:"annonce/update/:id",component:UpdateAnnonceComponent},
  {path:"annonce/detail/:id",component:DetailAnnonceComponent},
  {path:"**",component:NoutfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
