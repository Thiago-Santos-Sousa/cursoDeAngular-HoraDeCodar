import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Thiago"; /*Interpolação em angular*/
  age: number = 30;
  job = "programador";

  hobbies = ["correr", "jogar", "estudar"]; /*Array ou listas*/
  
  car = {
    name : 'Polo',/*Objetos*/
    year : 2019,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
