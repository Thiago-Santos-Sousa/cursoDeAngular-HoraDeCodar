import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  someTxt = "TESTANDO O PIPE OPERATOR";
  Today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
