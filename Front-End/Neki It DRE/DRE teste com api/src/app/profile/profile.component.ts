import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  profiles:any = [];

  constructor(public rest: RestService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profiles = [];
    this.rest.getProfile().subscribe((data: {}) => {
      console.log(data);
      this.profiles = data;
    });
  }

}
