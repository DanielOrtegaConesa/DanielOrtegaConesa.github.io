import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public config: any;
  public fullpageApi: any;

  constructor() {

    this.config = {
      licenseKey: 'HIesNLH!b3',
      anchors: ['home', 'technologies'],
      menu: '#menu',
      navigation: true,
      slidesNavigation: true,
      controlArrows: false,
      afterResize: () => {
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }
}
