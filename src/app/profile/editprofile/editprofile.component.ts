import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { OrganicbinserviceService } from 'src/app/organicbinservice.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  myForm: FormGroup;
  data: Data
  constructor(public userdata: DataService, private rut: Router, private service: OrganicbinserviceService) { }

  ngOnInit(): void {
    let m = sessionStorage.getItem('isUserId')
    this.userdata.data.userId
    console.log(m);

    this.service.getUserById(m).then(res => {
      this.data = res.data
      console.log(this.data);

      this.myForm = new FormGroup({
        userId: new FormControl(this.data.userId, Validators.required),
        firstName: new FormControl(this.data.firstName, Validators.required),
        lastName: new FormControl(this.data.lastName, Validators.required),
        email: new FormControl(this.data.email, Validators.required),
        password: new FormControl(this.data.password, Validators.required),
        phoneno: new FormControl(this.data.phoneno, Validators.required),
        gender: new FormControl(this.data.gender, Validators.required),
        address: new FormControl(this.data.address, Validators.required),
        dob: new FormControl(this.data.dob, Validators.required),
        pincode: new FormControl(this.data.pincode, Validators.required),
        city: new FormControl(this.data.city, Validators.required),

      });
    })
  }
  submit() {
    console.log("s", this.myForm.value);
    console.log("d", this.data.userId);

    if (this.data.userId) {
      this.service.updateUser(this.myForm.value).subscribe(res => {
        this.rut.navigateByUrl('/profile')
      })
    }
  }

}
