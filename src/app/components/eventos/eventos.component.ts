import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  txt: boolean = false;
  loko: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showMessage(): void{
      this.show = !this.show; // toggle
  }
  txts(): void{
    this.txt = !this.txt; // toggle
  }
  lokom(): void{
    this.loko = !this.loko;; // toggle
  }
}
