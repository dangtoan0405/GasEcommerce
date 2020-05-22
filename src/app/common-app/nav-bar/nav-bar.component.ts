import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UtilsService } from 'src/app/utility/utils.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Output() clickNav = new EventEmitter<any>();
  @Input() isMobileOrTablet: boolean;
  isShowMenu: boolean;
  constructor() {}

  ngOnInit(): void {}

  showMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
}
