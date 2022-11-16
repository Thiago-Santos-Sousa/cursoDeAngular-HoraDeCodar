import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  map: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  showMessage(): void{
    this.show = !this.show; //toggle
  }

  inMap(): void{
    this.map = !this.map;
  }
}
