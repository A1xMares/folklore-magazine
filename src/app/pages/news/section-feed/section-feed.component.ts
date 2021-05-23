import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-feed',
  templateUrl: './section-feed.component.html',
  styleUrls: ['./section-feed.component.scss']
})
export class SectionFeedComponent implements OnInit, AfterViewInit {

  isColonos = false;
  isEconomia = false;
  isSociedad = false;
  isDeportes = false;
  isOcasion = false;

  constructor() { }

  ngOnInit(): void {
    if (window.location.href.includes('colonos')) {
      this.isColonos = true;
    } else if (window.location.href.includes('ocasion')) {
      this.isOcasion = true;
    } else if (window.location.href.includes('economia')) {
      this.isEconomia = true;
    } else if (window.location.href.includes('sociedad')) {
      this.isSociedad = true;
    } else if (window.location.href.includes('deportes')) {
      this.isDeportes = true;
    }
  }

  ngAfterViewInit() {
    if (window.location.href.includes('colonos')) {
      this.isColonos = true;
    } else if (window.location.href.includes('ocasion')) {
      this.isOcasion = true;
    } else if (window.location.href.includes('economia')) {
      this.isEconomia = true;
    } else if (window.location.href.includes('sociedad')) {
      this.isSociedad = true;
    } else if (window.location.href.includes('deportes')) {
      this.isDeportes = true;
    }
  }

}
