import { Component } from '@angular/core';
import {Annonce} from "../annonce";
import {AnnonceService} from "../annonce.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent {
  annonce:Annonce= {id:0,title:"",long_desc:"",date_creation:""};
  constructor(private annouceService:AnnonceService,private activatedRoute:ActivatedRoute,private router:Router) {
    console.log(activatedRoute.snapshot.params["id"])
    annouceService.getAnnonce(activatedRoute.snapshot.params["id"]).subscribe(value => {
      this.annonce=value;
    })
  }

  ngOnInit() {
  }

  modifierAnnonce(){
    this.annouceService.putAnnonce(this.annonce).subscribe(value => {
      this.router.navigate(["/annonce/list"])
    })
  }
}
