import {Component, OnInit} from '@angular/core';
import {AnnonceService} from "../annonce.service";
import {Annonce} from "../annonce";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css']
})
export class DetailAnnonceComponent implements OnInit{
  detailsAnnonce:Annonce= {id:0,title:"",long_desc:"",date_creation:""};
  constructor(private annouceService:AnnonceService,private activatedRoute:ActivatedRoute) {
    console.log(activatedRoute.snapshot.params["id"])
    annouceService.getAnnonce(activatedRoute.snapshot.params["id"]).subscribe(value => {
      this.detailsAnnonce=value;
    })
  }

  ngOnInit() {
  }

}
