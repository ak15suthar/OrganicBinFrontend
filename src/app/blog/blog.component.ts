import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganicbinserviceService } from '../organicbinservice.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listBlog: {};
  constructor(public service: OrganicbinserviceService, private router: Router) { }
  get isAdminLogIn() {
    return this.service.isAdminLogIn();
  }
  ngOnInit(): void {
console.log("hello");


    this.service.listBlog().then(res => {
      this.listBlog = res.data
      console.log("s",res.data);

    })
  }
}
