import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-horizontal-feed',
  templateUrl: './horizontal-feed.component.html',
  styleUrls: ['./horizontal-feed.component.scss']
})
export class HorizontalFeedComponent implements OnInit {

  @Input() newsObj: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
