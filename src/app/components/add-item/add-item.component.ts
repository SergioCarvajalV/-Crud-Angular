import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  id:number=2;
  name:string='';
  description:string='';

  constructor(private ItemService:ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item;
    item.id = this.id;
    item.name = this.name;
    item.description = this.description;
    item.completed= false;
    this.ItemService.addItem(item);
  }

}
