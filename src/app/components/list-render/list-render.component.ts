import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[]= [];
  jogos = [
    {name: "NFS", type: "Corrrida"},
    {name: "FIFA", type: "Footebol"},
    {name: "COD", type: "Guerra"},
    {name: "Amongus", type: "Suspense"},
  ]
  animalDetails!: string;

  constructor(private listService: ListService) {
    this.getAnimals()
   }

  ngOnInit(): void {
  }
  idade(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal){
    console.log("removendo animal...");
    this.animals = this.listService.remove(this.animals,animal)
  }
  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
