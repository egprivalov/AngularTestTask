import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingCardComponent } from './heading-card/heading-card.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { PageComponent } from './page/page.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeadingCardComponent,
    SimpleCardComponent,
    PageComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CardsModule { }
