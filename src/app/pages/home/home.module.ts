import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";
import {HorizontalFeedModule} from "../../components/news/horizontal-feed/horizontal-feed.module";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [HomeComponent],
  imports: [
      // ROUTE
      RouterModule.forChild([{ path: '', component: HomeComponent }]),
      // IMPORTS
    CommonModule,
    HorizontalFeedModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ]
})
export class HomeModule { }
