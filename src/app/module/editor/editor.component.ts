import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  userDetails: any;
  constructor(
    private router: Router,

  ) {
    $.ajax({
      url: 'https://randomuser.me/api/?page=3&results=10&seed=abc',
      dataType: 'json',
      success: (data) => {
        this.userDetails = data.results[0];
        console.log(data);
      }
    });
  }

  ngOnInit() {
  }
  LogOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
