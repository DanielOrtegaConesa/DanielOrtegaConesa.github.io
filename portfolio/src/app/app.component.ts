import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'portfolio';
  public config: any;
  public fullpageApi: any;

  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      licenseKey: 'HIesNLH!b3',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      // sectionsColor: ['#ccc', '#ccc', '#ccc', '#ccc', '#ccc'],
      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
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
