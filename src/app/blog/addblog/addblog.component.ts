import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganicbinserviceService } from 'src/app/organicbinservice.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  myForm: FormGroup;
  constructor(private service: OrganicbinserviceService, private router: Router) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      blogTitle: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required)
    });
  }
  submit() {

    if (this.myForm.valid) {

      this.service.addBlog(this.myForm.value).subscribe((res) => {
        console.log(this.myForm.value);
        this.router.navigate(['/blog'])
      });
    }
  }

}
