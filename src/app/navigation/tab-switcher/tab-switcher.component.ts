import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tab-switcher',
  templateUrl: './tab-switcher.component.html',
  styleUrls: ['./tab-switcher.component.scss']
})
export class TabSwitcherComponent implements OnInit, OnDestroy {
  currentActiveTab: 0 | 1 | 2 | 3 = 0;
  subscription: Subscription | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.route.queryParams
      .subscribe(params => {
        let ActiveTab = Number(params["tab"]);
        if (ActiveTab === 0 || ActiveTab === 1 || ActiveTab === 2 || ActiveTab === 3){
          this.currentActiveTab = ActiveTab;
        }
        else if (params["tab"]){
          this.router.navigate(['not-found'])
        }
      })
  }

  ngOnDestroy(): void{
    this.subscription?.unsubscribe();
  }
}
