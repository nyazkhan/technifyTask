import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userCredentials = {
    email: '',
    password: '',
    type: 'editor'

  };
  constructor(
    private router: Router,
  ) {
    $.ajax({
      url: 'https://randomuser.me/api/?page=3&results=10&seed=abc',
      dataType: 'json',
      success: (data) => {
        console.log(data);
      }
    });
  }

  ngOnInit() {
  }
  onSubmit() {



    this.saveData(this.userCredentials);
    if (this.userCredentials.type === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/editor']);

    }
  }
  saveData(userCredentials) {
    for (const key in userCredentials) {
      if (userCredentials.hasOwnProperty(key)) {
        localStorage.setItem(key, userCredentials[key]);

      }
    }

  }
}
