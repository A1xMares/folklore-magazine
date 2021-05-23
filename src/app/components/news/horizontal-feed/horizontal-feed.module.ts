import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalFeedComponent } from './horizontal-feed.component';
import {FeedNewCardModule} from "../feed-new-card/feed-new-card.module";
import {IvyCarouselModule} from "angular-responsive-carousel";



@NgModule({
  declarations: [HorizontalFeedComponent],
  imports: [
    CommonModule,
    IvyCarouselModule,
    FeedNewCardModule
  ],
  exports: [
    HorizontalFeedComponent
  ]
})
export class HorizontalFeedModule { }
