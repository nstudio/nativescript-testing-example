import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { CustomPlugin } from "nativescript-internal-plugin";

@Component({
  selector: "ns-items",
  templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;
  plugin: CustomPlugin;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();

    this.plugin = new CustomPlugin();
    console.log("plugin:", this.plugin);
  }
}
