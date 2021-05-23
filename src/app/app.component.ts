import {ChangeDetectorRef, Component} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /* manage responsive */
  private mobileQueryListener: () => void;
  public mobileQuery: MediaQueryList;

  constructor(
    public media: MediaMatcher,
    public changeDetectorRef: ChangeDetectorRef,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 992px)');
    this.mobileQueryListener = () => {
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

}
