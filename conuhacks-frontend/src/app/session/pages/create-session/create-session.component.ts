import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  hostName: string;
  sessionName: string;
  constructor() { }

  ngOnInit() {
  }
  submitForm(){
    console.log(this.sessionName, this.hostName);
    
  }
}
