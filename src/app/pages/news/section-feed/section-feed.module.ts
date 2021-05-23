import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionFeedComponent } from './section-feed.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [SectionFeedComponent],
  imports: [
    // ROUTE
    RouterModule.forChild([{ path: '', component: SectionFeedComponent }]),
    // IMPORTS
    CommonModule
  ]
})
export class SectionFeedModule { }
