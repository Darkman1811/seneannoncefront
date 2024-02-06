import {Component, OnInit} from '@angular/core';
import {AnnonceService} from "../annonce.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Annonce} from "../annonce";

@Component({
  selector: 'app-delete-annonce',
  templateUrl: './delete-annonce.component.html',
  styleUrls: ['./delete-annonce.component.css']
})
export class DeleteAnnonceComponent implements OnInit{

  annonce:Annonce={id:0,title:"",long_desc:"",date_creation:""}
  constructor(private annonceService:AnnonceService,private router:Router,private activatedRoute:ActivatedRoute) {
    this.annonceService.getAnnonce(this.activatedRoute.snapshot.params["id"]).subscribe(value => {
      this.annonce=value;
      console.log(value)
    })
  }


  deleteAnnonce(){

    this.annonceService.deleteAnnonce(this.activatedRoute.snapshot.params["id"]).subscribe(value => {
    this.router.navigate(["/annonce/list"])

    })
  }
  ngOnInit() {
  }
}
