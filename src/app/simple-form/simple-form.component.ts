import { Component, OnInit } from '@angular/core';

import { User } from './../User';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }
  private gender: string[];
  private user: User;
  ngOnInit() {
    this.gender = ['Male','Female','Others'];
    this.user = new User({
      email: "", password:{
        pwd: "", confirm_pwd: ""
      },
      gender: this.gender[0], terms: false
    });
  }

  public onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
    this.user = value;
    console.log( this.user);
    console.log("valid: " + valid);
}

}
