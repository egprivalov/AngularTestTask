import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabSwitcherComponent } from './tab-switcher/tab-switcher.component';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TabComponent,
    TabSwitcherComponent,
    NavigationPageComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class NavigationModule { }
