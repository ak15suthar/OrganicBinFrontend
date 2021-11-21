import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganicbinserviceService } from '../organicbinservice.service';

@Component({
  selector: 'app-viewapplication',
  templateUrl: './viewapplication.component.html',
  styleUrls: ['./viewapplication.component.css']
})
export class ViewapplicationComponent implements OnInit {
  Application: {};
  statusId = 0;
  listApplication: {};
  constructor(public service: OrganicbinserviceService, private router: Router) { }

  ngOnInit(): void {
    this.service.listAllApplication().then(res => {
      this.listApplication = res.data
    })
  }

  accept(value) {
    console.log(value);
    this.Application = { "applicationNo": value, "statusId": this.statusId = 2 }
    this.service.acceptApplication(this.Application).subscribe(res => {
      console.log("stauts accpet", res);
    })
    this.service.listAllApplication().then(res => {
      this.listApplication = res.data;
      console.log(res.data);
    })
  }
}
