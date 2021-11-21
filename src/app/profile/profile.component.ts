import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';
import { OrganicbinserviceService } from '../organicbinservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: Data
  constructor(public userdata: DataService, private service: OrganicbinserviceService) { }

  ngOnInit(): void {
    let m = sessionStorage.getItem('isUserId')

    console.log(m);

    this.service.getUserById(m).then(res => {
      this.data = res.data
      console.log(this.data);

    })
  }

}
