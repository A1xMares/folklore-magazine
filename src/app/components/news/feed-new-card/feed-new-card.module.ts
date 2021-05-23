import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedNewCardComponent } from './feed-new-card.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [FeedNewCardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    FeedNewCardComponent
  ]
})
export class FeedNewCardModule { }
