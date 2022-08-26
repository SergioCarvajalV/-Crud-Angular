import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { id: 1, name: 'Item 1', description: '1 description', completed: false },
      { id: 2, name: 'Item 2', description: '2 description', completed: false },
    ]
  }

}
