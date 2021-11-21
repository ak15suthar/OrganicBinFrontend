import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { OrganicbinserviceService } from '../organicbinservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private service: OrganicbinserviceService, private userData: DataService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  login() {
    console.log(this.myForm);

    if (this.myForm.valid) {
      this.service.login(this.myForm.value).subscribe(res => {
        if (res.data.userId == 12) {
          sessionStorage.setItem("isAdmin", "true")
          console.log(sessionStorage.getItem("isAdmin"));

          this.router.navigate([''])
        } else {
          let m = res.data.userId
          sessionStorage.setItem("isLogin", "true");
          sessionStorage.setItem("isUserId", m);
          this.userData.data = res.data
          this.router.navigate([''])
        }
      });
    }
  }

}
