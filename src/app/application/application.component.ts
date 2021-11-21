import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganicbinserviceService } from '../organicbinservice.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  listApplication: {};
  constructor(public service: OrganicbinserviceService, private router: Router) { }

  ngOnInit(): void {

    let m = sessionStorage.getItem('isUserId')

    this.service.listApplication(m).then(res => {
      this.listApplication = res.data
    })
  }
}
