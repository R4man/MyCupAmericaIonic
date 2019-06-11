import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BaseService } from './base.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
   
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public baseService: BaseService,
    public menu: MenuController
  ) {
    this.initializeApp();
  }
  openFirst() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }

  openEnd() {
    this.menu.open('menu');
  }
  openCustom() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}