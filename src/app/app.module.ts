import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { BuyComponent } from './buy.component';


const safeGoldRouting: Routes=[
  {
    path:"", component:HomeComponent

  },
  {
    path:"buy", component:BuyComponent

  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(safeGoldRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
