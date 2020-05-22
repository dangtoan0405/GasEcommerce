import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Output() clickNav = new EventEmitter<any>();
  @Input() isMobileOrTablet: boolean;
  constructor(private bottomSheet: MatBottomSheet) {}
  ngOnInit(): void {}

}
