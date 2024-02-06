import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Annonce} from "../annonce";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private router:Router) {
  }

  ngOnInit() {
  }

  goToAddAnnonce(){
    this.router.navigate(["/annonce/add"])
  }

  goToListAnnonce(){
    this.router.navigate(["/annonce/list"])
  }
}
