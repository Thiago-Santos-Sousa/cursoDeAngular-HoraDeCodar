import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Thiago Santos';
  age: number = 27;
  job: string = 'programador';

  hobbies = ["Jogar", "Correr", "Nadar"];

  car = {
    name: "Polo",
    year: 2019,
    placa: "1234abcd",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
