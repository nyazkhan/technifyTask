import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() data: any;
  userDetails: any = {};

  constructor() { }

  ngOnInit() {
    this.userDetails = this.data;
    console.log(this.userDetails);
  }

}
