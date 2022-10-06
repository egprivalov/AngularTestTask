import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationModule } from "./navigation/navigation.module";
import { CardsModule } from "./cards/cards.module";

import { Routes, RouterModule} from "@angular/router";
import { PageComponent } from "./cards/page/page.component";
import { NavigationPageComponent } from "./navigation/navigation-page/navigation-page.component";
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes: Routes =[
  { path: '', component: PageComponent },
  { path: 'navigator', component: NavigationPageComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    CardsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
