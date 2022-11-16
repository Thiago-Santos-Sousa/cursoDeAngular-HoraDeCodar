import { Component, OnInit } from '@angular/core';

import { Animal } from './../../Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetail = '';

  constructor(private listService: ListService) {
    this.getAnimals()
   }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetail = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal) {
    this.animals =  this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id);
   }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
