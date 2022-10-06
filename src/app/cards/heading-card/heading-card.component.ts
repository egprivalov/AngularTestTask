import { Component, OnInit } from '@angular/core';
import {JsonDataService} from "../../json-data.service";

@Component({
  selector: 'app-heading-card',
  templateUrl: './heading-card.component.html',
  styleUrls: ['./heading-card.component.scss']
})
export class HeadingCardComponent implements OnInit {
  total: number;

  constructor(private jsonDataService: JsonDataService) {
    this.total = jsonDataService.getTotal()
  }

  ngOnInit(): void {
  }

}
