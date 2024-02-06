import {Component, OnInit} from '@angular/core';
import {AnnonceService} from "../annonce.service";
import {Annonce} from "../annonce";
import {Router} from "@angular/router";

@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent implements OnInit{

  annonceListe: Annonce[]=[]
  constructor(private annonceService:AnnonceService,private router:Router) {
  this.annonceService.getAnnonces().subscribe(value => {
    // @ts-ignore
    this.annonceListe=value.content;
    console.log("value >>> "+JSON.stringify(this.annonceListe))
  })
  }



  gotoDetails(annonce:Annonce){
    this.router.navigate(["/annonce/detail",annonce.id])
  }

  gotoDelete(annonce:Annonce){
    this.router.navigate(["/annonce/delete",annonce.id])
  }

  gotoUpdate(annonce:Annonce){
    this.router.navigate(["/annonce/update",annonce.id])
  }
  ngOnInit() {
  }

}
