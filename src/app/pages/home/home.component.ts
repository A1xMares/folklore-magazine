import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from "../../services/news.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private onDestroy = new Subject<void>();

  usableNews: any[] = [];
  lastNews: any[] = [];
  sportNews: any[] = [];
  entertainmentNews: any[] = [];

  lastLoaded = false;
  sportsLoaded = false;
  entertainmentLoaded = false;

  people = [
    {name: 'Irene García', house: '#3056'},
    {name: 'Arturo Coronel', house: '#3057'},
    {name: 'Eugenia Velazco', house: '#3059'},
    {name: 'Ignacio Díaz', house: '#3059'},
    {name: 'Carolina Hernandez', house: '#3060'}
  ];

  meetings = [
    {place: 'Parque central', date: '2021-03-23T03:00:00+00:00'},
    {place: 'Casa club', date: '2021-03-24T03:00:00+00:00'},
    {place: 'Casa club', date: '2021-03-25T03:00:00+00:00'},
  ];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.newsService.getLastNews().pipe(
      takeUntil(this.onDestroy)
    ).subscribe((res: any) => {
      this.lastNews = res.data.filter((p: any) => p.image).splice(0,7);
      this.sportNews = res.data.filter((p: any) => p.image).splice(7,12);
      this.entertainmentNews = res.data.filter((p: any) => p.image).splice(12,20);
      this.lastLoaded = true;
    });
    /*this.newsService.getSportNews().pipe(
      takeUntil(this.onDestroy)
    ).subscribe((res: any) => {
      this.sportNews = res.data.filter((p: any) => p.image);
      this.sportsLoaded = true;
    });
    this.newsService.getEntertainmentNews().pipe(
      takeUntil(this.onDestroy)
    ).subscribe((res: any) => {
      this.entertainmentNews = res.data.filter((p: any) => p.image);
      this.entertainmentLoaded = true;
    });*/
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

}
