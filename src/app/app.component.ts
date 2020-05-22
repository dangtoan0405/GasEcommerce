import { Component } from '@angular/core';
import { UtilsService } from './utility/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GasECommerce';
  public isMobileOrTablet: boolean;
  constructor(private utilService: UtilsService) {
    this.isMobileOrTablet =
      this.utilService.isMobile() || this.utilService.isTablet();
  }
}
