import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {
  transactionsNames: ("Income" | "Outcome" | "Investments" | "Loans")[] = [
    "Income",
    "Investments",
    "Outcome",
    "Loans"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
