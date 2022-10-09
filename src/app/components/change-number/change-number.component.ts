import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {
  @Output() missaoclicar: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  clicar() {
    this.missaoclicar.emit();
  }
}
