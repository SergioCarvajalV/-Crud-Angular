import { Injectable } from '@angular/core';
import { Item } from '../models/item';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[]=[
    { id: 1, name: 'Item 1', description: '1 description', completed: true },
    { id: 2, name: 'Item 2', description: '2 description', completed: false },
  ];

  constructor() { }

  getItems(){
    return this.items;
  }
  addItem(item: Item){
    this.items.unshift(item);
  }
}
