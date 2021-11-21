import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganicbinserviceService } from '../organicbinservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: OrganicbinserviceService, private rut: Router) { }

  ngOnInit(): void {
  }

  get isLoggedIn() {
    return this.service.isLoggedIn();
  }

  get isAdminLogIn() {
    return this.service.isAdminLogIn();
  }
  logout() {
    sessionStorage.clear();
    this.rut.navigate(['/']);
  }

}
