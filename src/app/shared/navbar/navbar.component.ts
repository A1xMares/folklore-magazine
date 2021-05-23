import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  mainNavItems = [
    {title: 'INICIO', route: 'tu-fraccionamiento/inicio', icon: ''},
    {title: 'COLONOS', route: 'tu-fraccionamiento/colonos', icon: ''},
    {title: 'ECONOMÍA', route: 'tu-fraccionamiento/economia', icon: ''},
    {title: 'SOCIEDAD', route: 'tu-fraccionamiento/sociedad', icon: ''},
    {title: 'DEPORTES', route: 'tu-fraccionamiento/deportes', icon: ''},
    {title: 'OCASIÓN', route: 'tu-fraccionamiento/ocasion', icon: ''},
  ];

  endNavItems = [
    /*{title: 'CONTACTO', route: 'contacto', icon: ''},*/
    {title: 'PERFIL', route: 'perfil', icon: 'person'},
  ];

  newsItems = [
    {title: 'COLONOS', route: 'tu-fraccionamiento/inicio'},
    {title: 'ECONOMÍA',route: 'tu-fraccionamiento/inicio'},
    {title: 'SOCIEDAD', route: 'tu-fraccionamiento/inicio'},
    {title: 'DEPORTES', route: 'tu-fraccionamiento/inicio'},
    {title: 'OCASIÓN', route: 'tu-fraccionamiento/inicio'},
    {title: 'HOROSCOPOS', route: 'tu-fraccionamiento/inicio'},
  ];

  /* manage responsive */
  private mobileQueryListener: () => void;
  private smallMobileQueryListener: () => void;
  public mobileQuery: MediaQueryList;
  public smallMobileQuery: MediaQueryList;

  constructor(
    public media: MediaMatcher,
    public changeDetectorRef: ChangeDetectorRef,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this.smallMobileQuery = media.matchMedia('(max-width: 500px)');
    this.mobileQueryListener = () => {
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.smallMobileQueryListener = () => {
      changeDetectorRef.detectChanges();
    };
    this.smallMobileQuery.addListener(this.smallMobileQueryListener);
  }

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    /*if (window.pageYOffset > 82) {
      if (document.getElementById('navbar-container')) {
        document.getElementById('navbar-container').classList.add('mainNav-scrolled');
      }
    }

    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos >= currentScrollPos) {
        if (window.pageYOffset <= 38) {
          document.getElementById("navbar-container").style.top = "0";
        } else {
          document.getElementById("navbar-container").style.top = "-38px";
        }
        this.yellowBarDisplayed = true;
      } else {
        if (window.pageYOffset >= 5 && document.getElementsByTagName('html')[0].style.overflow !== 'hidden') {
          document.getElementById("navbar-container").style.top = "-82px";
          this.yellowBarDisplayed = false;
        }
      }
      prevScrollpos = currentScrollPos;

      if (window.pageYOffset > 82) {
        document.getElementById('navbar-container').classList.add('mainNav-scrolled');
      } else {
        document.getElementById('navbar-container').classList.remove('mainNav-scrolled');
      }
    }*/

  }

}
