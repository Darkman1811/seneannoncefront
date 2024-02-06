import {Component, OnInit} from '@angular/core';
import {AnnonceService} from "../annonce.service";
import {Annonce} from "../annonce";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit{
  annonce:Annonce={id:0,title:"",long_desc:"",date_creation:""}
constructor(private annonceService:AnnonceService,private router:Router) {
}

addAnnonce(){
  this.annonceService.addAnnonce(this.annonce).subscribe(value => {
    this.router.navigate(["/annonce/list"])
    }
  );

  console.log(this.annonce)
}
ngOnInit() {
}
}
