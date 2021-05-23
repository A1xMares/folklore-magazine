import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feed-new-card',
  templateUrl: './feed-new-card.component.html',
  styleUrls: ['./feed-new-card.component.scss']
})
export class FeedNewCardComponent implements OnInit {

  @Input() imageUrl = '';
  @Input() title = '';
  @Input() date = new Date();
  @Input() description = '';

  constructor() { }

  ngOnInit(): void {
  }

}
