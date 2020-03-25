import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userList: any = [];
  showUserDetails = false;
  userDetails: any;
  constructor(
    private router: Router,

  ) {
    $.ajax({
      url: 'https://randomuser.me/api/?page=3&results=10&seed=abc',
      dataType: 'json',
      success: (data) => {
        this.userList = data.results;
        console.log(data);
      }
    });
  }

  ngOnInit() {
  }
  gotoProfilePage(user) {
    this.showUserDetails = true;
    this.userDetails = user;
  }
  LogOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
