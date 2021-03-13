import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from "../../services/news.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-mvp-home',
  templateUrl: './mvp-home.component.html',
  styleUrls: ['./mvp-home.component.scss']
})
export class MvpHomeComponent implements OnInit, OnDestroy {

  private onDestroy = new Subject<void>();
  public newsPosts: any[] = []; // [{},{},{},{},{},{},{},{},{}]
  public selectedPosts: any[] = [];
  public pagination: number[] = [0];
  public selectedPage = 0;
  public postsPerPages = 3;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.newsService.getLastNews().pipe(
      takeUntil(this.onDestroy)
    ).subscribe((data: any) => {
      const processedData = data.articles.filter((p: any) => p.urlToImage);
      this.newsPosts = processedData;
      this.setPagination();
      this.setCurrentPage(0);
    });
  }

  setPagination() {
    const pagination = Math.ceil(this.newsPosts.length / this.postsPerPages);
    const pages = [];
    for (let x = 0; x < pagination; x++) {
      pages.push(x);
    }
    this.pagination = pages;
  }

  setCurrentPage(page: number) {
    if (page >= 0 && page < Math.ceil(this.newsPosts.length / this.postsPerPages)) {
      const min = page * this.postsPerPages;
      const max = min + this.postsPerPages;
      this.selectedPage = page;
      this.selectedPosts = this.newsPosts.slice(min, max);
    }
  }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

}
