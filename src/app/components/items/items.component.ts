import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


  items: Item[] = [];

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {

    this.items = this.itemService.getItems();
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(i => i.id !== item.id);
  }
  lengthItems(){
   this.items.length;
  }
}
