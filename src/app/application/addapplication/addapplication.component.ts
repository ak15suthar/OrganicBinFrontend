import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganicbinserviceService } from 'src/app/organicbinservice.service';

@Component({
  selector: 'app-addapplication',
  templateUrl: './addapplication.component.html',
  styleUrls: ['./addapplication.component.css']
})
export class AddapplicationComponent implements OnInit {

  myForm: FormGroup;
  todaysdate = new Date()

  constructor(private service: OrganicbinserviceService, private router: Router) { }

  ngOnInit(): void {
    let m = sessionStorage.getItem('isUserId')

    this.myForm = new FormGroup({
      applicationDate: new FormControl('', Validators.required),
      noOfBags: new FormControl('', Validators.required),
      collectAddress: new FormControl('', Validators.required),
      sizeOfBag: new FormControl('', Validators.required),
      userId: new FormControl(m, Validators.required)
    });
  }
  submit() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      this.service.application(this.myForm.value).subscribe((res) => {
        console.log(this.myForm.value);
        this.router.navigate(['/application'])
      });
    }
  }

}
