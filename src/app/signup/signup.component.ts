import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganicbinserviceService } from '../organicbinservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;

  constructor(private service: OrganicbinserviceService, private router: Router) { }
  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signup() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      this.service.signup(this.myForm.value).subscribe((res) => {
        // console.log(this.myForm.value);
        this.router.navigate(['/login'])
      });
    }
  }

}
